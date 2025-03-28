import { createContext, useState, useEffect } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from "@/config/supabase";
import * as WebBrowser from "expo-web-browser";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "trainly://",
        },
      });

      if (error) throw error;
      if (data?.url) {
        const result = await WebBrowser.openAuthSessionAsync(
          data.url,
          "trainly://"
        );

        if (result.type === "success") {
          const access_token = result.url
            .split("access_token=")[1]
            .split("&")[0];
          const refresh_token = result.url
            .split("refresh_token=")[1]
            .split("&")[0];

          const {
            data: { session },
            error: sessionError,
          } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          });

          if (session?.user) {
            setUser(session.user);
          }
        }
      }
    } catch (error) {
      console.error("Error in signInWithGoogle:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
