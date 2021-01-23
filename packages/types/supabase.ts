/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface definitions {
  expense_items: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    item?: string;
    price?: string;
    /**
     * Note:
     * This is a Foreign Key to `expenses.id`.<fk table='expenses' column='id'/>
     */
    expense_id?: number;
    /**
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    user_id?: string;
  };
  expenses: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    receipt_number?: string;
    description?: string;
    date?: string;
    total_cost?: string;
    user_id: string;
  };
  files: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    file_name?: string;
    type?: string;
    file_size?: string;
    /**
     * Note:
     * This is a Foreign Key to `users.id`.<fk table='users' column='id'/>
     */
    user_id?: string;
  };
  users: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    email?: string;
  };
}
