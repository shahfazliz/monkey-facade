/**
 * @author Jor-El
 * @module app/types/userType.ts
 * @description This file defines the type of a user.
 */

/**
 * The type of a user.
 */
export interface UserType {
  /**
   * The unique identifier of the user.
   */
  id: string

  /**
   * The first name of the user.
   */
  firstName: string

  /**
   * The last name of the user.
   */
  lastName: string

  /**
   * The email address of the user.
   */
  email: string

  /**
   * The password of the user.
   */
  password: string
}
