import { NessieAbstractMigration, NessieInfo } from "prj/deps.ts";

export default class extends NessieAbstractMigration {
  /** Runs on migrate */
  async up(info: NessieInfo): Promise<void> {}

  /** Runs on rollback */
  async down(info: NessieInfo): Promise<void> {}
}
