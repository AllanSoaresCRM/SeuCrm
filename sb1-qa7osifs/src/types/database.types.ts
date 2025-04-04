export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          name: string
          phone: string
          email: string
          address: string
          birthdate: string
          notes: string
          last_purchase: string
          total_spent: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          phone: string
          email: string
          address?: string
          birthdate?: string
          notes?: string
          last_purchase?: string
          total_spent?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          email?: string
          address?: string
          birthdate?: string
          notes?: string
          last_purchase?: string
          total_spent?: string
          created_at?: string
          updated_at?: string
        }
      }
      visits: {
        Row: {
          id: string
          client_id: string
          date: string
          service: string
          value: string
          created_at: string
        }
        Insert: {
          id?: string
          client_id: string
          date: string
          service: string
          value: string
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          date?: string
          service?: string
          value?: string
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string
          duration: string
          price: string
          image: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          duration: string
          price: string
          image: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          duration?: string
          price?: string
          image?: string
          created_at?: string
          updated_at?: string
        }
      }
      professionals: {
        Row: {
          id: string
          name: string
          role: string
          color: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          color: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          color?: string
          created_at?: string
          updated_at?: string
        }
      }
      appointments: {
        Row: {
          id: string
          client_id: string
          professional_id: string
          service: string
          day: number
          start_hour: number
          end_hour: number
          price: string
          created_at: string
        }
        Insert: {
          id?: string
          client_id: string
          professional_id: string
          service: string
          day: number
          start_hour: number
          end_hour: number
          price: string
          created_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          professional_id?: string
          service?: string
          day?: number
          start_hour?: number
          end_hour?: number
          price?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Insertable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type Updatable<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']