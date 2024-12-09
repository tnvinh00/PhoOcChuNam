export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      _BranchToPost: {
        Row: {
          A: number;
          B: number;
        };
        Insert: {
          A: number;
          B: number;
        };
        Update: {
          A?: number;
          B?: number;
        };
        Relationships: [
          {
            foreignKeyName: '_BranchToPost_A_fkey';
            columns: ['A'];
            isOneToOne: false;
            referencedRelation: 'Branch';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: '_BranchToPost_B_fkey';
            columns: ['B'];
            isOneToOne: false;
            referencedRelation: 'Post';
            referencedColumns: ['id'];
          }
        ];
      };
      _PostToTag: {
        Row: {
          A: number;
          B: number;
        };
        Insert: {
          A: number;
          B: number;
        };
        Update: {
          A?: number;
          B?: number;
        };
        Relationships: [
          {
            foreignKeyName: '_PostToTag_A_fkey';
            columns: ['A'];
            isOneToOne: false;
            referencedRelation: 'Post';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: '_PostToTag_B_fkey';
            columns: ['B'];
            isOneToOne: false;
            referencedRelation: 'Tag';
            referencedColumns: ['id'];
          }
        ];
      };
      _prisma_migrations: {
        Row: {
          applied_steps_count: number;
          checksum: string;
          finished_at: string | null;
          id: string;
          logs: string | null;
          migration_name: string;
          rolled_back_at: string | null;
          started_at: string;
        };
        Insert: {
          applied_steps_count?: number;
          checksum: string;
          finished_at?: string | null;
          id: string;
          logs?: string | null;
          migration_name: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Update: {
          applied_steps_count?: number;
          checksum?: string;
          finished_at?: string | null;
          id?: string;
          logs?: string | null;
          migration_name?: string;
          rolled_back_at?: string | null;
          started_at?: string;
        };
        Relationships: [];
      };
      Branch: {
        Row: {
          address: string;
          createdAt: string;
          description: string;
          direction: string;
          emails: string[] | null;
          facebook: string;
          foodId: number | null;
          id: number;
          images: string[] | null;
          name: string;
          phones: string[] | null;
          postId: number | null;
          slug: string;
          tax: string;
          updatedAt: string;
        };
        Insert: {
          address: string;
          createdAt?: string;
          description: string;
          direction: string;
          emails?: string[] | null;
          facebook: string;
          foodId?: number | null;
          id?: number;
          images?: string[] | null;
          name: string;
          phones?: string[] | null;
          postId?: number | null;
          slug: string;
          tax: string;
          updatedAt: string;
        };
        Update: {
          address?: string;
          createdAt?: string;
          description?: string;
          direction?: string;
          emails?: string[] | null;
          facebook?: string;
          foodId?: number | null;
          id?: number;
          images?: string[] | null;
          name?: string;
          phones?: string[] | null;
          postId?: number | null;
          slug?: string;
          tax?: string;
          updatedAt?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'Branch_foodId_fkey';
            columns: ['foodId'];
            isOneToOne: false;
            referencedRelation: 'Food';
            referencedColumns: ['id'];
          }
        ];
      };
      Category: {
        Row: {
          colorId: number | null;
          createdAt: string;
          id: number;
          name: string;
          parentId: number | null;
          slug: string;
          updatedAt: string;
        };
        Insert: {
          colorId?: number | null;
          createdAt?: string;
          id?: number;
          name: string;
          parentId?: number | null;
          slug: string;
          updatedAt: string;
        };
        Update: {
          colorId?: number | null;
          createdAt?: string;
          id?: number;
          name?: string;
          parentId?: number | null;
          slug?: string;
          updatedAt?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'Category_colorId_fkey';
            columns: ['colorId'];
            isOneToOne: false;
            referencedRelation: 'Color';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'Category_parentId_fkey';
            columns: ['parentId'];
            isOneToOne: false;
            referencedRelation: 'Category';
            referencedColumns: ['id'];
          }
        ];
      };
      Color: {
        Row: {
          createdAt: string;
          hex: string;
          id: number;
          name: string;
          slug: string;
          updatedAt: string;
        };
        Insert: {
          createdAt?: string;
          hex?: string;
          id?: number;
          name: string;
          slug: string;
          updatedAt: string;
        };
        Update: {
          createdAt?: string;
          hex?: string;
          id?: number;
          name?: string;
          slug?: string;
          updatedAt?: string;
        };
        Relationships: [];
      };
      Food: {
        Row: {
          createdAt: string;
          description: string | null;
          id: number;
          image: string | null;
          name: string;
          price: number | null;
          updatedAt: string;
        };
        Insert: {
          createdAt?: string;
          description?: string | null;
          id?: number;
          image?: string | null;
          name: string;
          price?: number | null;
          updatedAt: string;
        };
        Update: {
          createdAt?: string;
          description?: string | null;
          id?: number;
          image?: string | null;
          name?: string;
          price?: number | null;
          updatedAt?: string;
        };
        Relationships: [];
      };
      Post: {
        Row: {
          authorId: number | null;
          categoryId: number | null;
          content: string | null;
          createdAt: string;
          description: string;
          id: number;
          published: boolean;
          slug: string;
          status: Database['public']['Enums']['Status'];
          thumbnail: string | null;
          title: string;
          updatedAt: string;
          views: number;
        };
        Insert: {
          authorId?: number | null;
          categoryId?: number | null;
          content?: string | null;
          createdAt?: string;
          description: string;
          id?: number;
          published?: boolean;
          slug: string;
          status?: Database['public']['Enums']['Status'];
          thumbnail?: string | null;
          title: string;
          updatedAt: string;
          views?: number;
        };
        Update: {
          authorId?: number | null;
          categoryId?: number | null;
          content?: string | null;
          createdAt?: string;
          description?: string;
          id?: number;
          published?: boolean;
          slug?: string;
          status?: Database['public']['Enums']['Status'];
          thumbnail?: string | null;
          title?: string;
          updatedAt?: string;
          views?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'Post_authorId_fkey';
            columns: ['authorId'];
            isOneToOne: false;
            referencedRelation: 'User';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'Post_categoryId_fkey';
            columns: ['categoryId'];
            isOneToOne: false;
            referencedRelation: 'Category';
            referencedColumns: ['id'];
          }
        ];
      };
      SiteSetting: {
        Row: {
          createdAt: string;
          disabled: boolean;
          id: number;
          key: string;
          updatedAt: string;
          value: string;
        };
        Insert: {
          createdAt?: string;
          disabled?: boolean;
          id?: number;
          key: string;
          updatedAt: string;
          value: string;
        };
        Update: {
          createdAt?: string;
          disabled?: boolean;
          id?: number;
          key?: string;
          updatedAt?: string;
          value?: string;
        };
        Relationships: [];
      };
      Tag: {
        Row: {
          createdAt: string;
          id: number;
          name: string;
          updatedAt: string;
        };
        Insert: {
          createdAt?: string;
          id?: number;
          name: string;
          updatedAt: string;
        };
        Update: {
          createdAt?: string;
          id?: number;
          name?: string;
          updatedAt?: string;
        };
        Relationships: [];
      };
      User: {
        Row: {
          description: string | null;
          email: string;
          id: number;
          name: string | null;
          role: Database['public']['Enums']['Role'];
          title: string | null;
        };
        Insert: {
          description?: string | null;
          email: string;
          id?: number;
          name?: string | null;
          role?: Database['public']['Enums']['Role'];
          title?: string | null;
        };
        Update: {
          description?: string | null;
          email?: string;
          id?: number;
          name?: string | null;
          role?: Database['public']['Enums']['Role'];
          title?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      Role: 'super_admin' | 'admin' | 'user';
      Status: 'draft' | 'published' | 'archived';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
