import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://zonsgqoyanqzgaplliaj.supabase.co', // Replace with your Supabase URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvbnNncW95YW5xemdhcGxsaWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5OTUxMzcsImV4cCI6MjA1MzU3MTEzN30.3suGQ3a0aoZNNJVll7hJmzbOXkqaWw_Rtdd0E47Wxh0' // Replace with your Supabase anon key
    );
  }

  // Method to sign up with email and password
  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    return { data, error };
  }

  // Method to sign in with email and password
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  }

  // Method to sign out
  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    return { error };
  }

  // Method to get the current user
  getCurrentUser() {
    return this.supabase.auth.getUser();
  }
}
