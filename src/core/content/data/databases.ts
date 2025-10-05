import type {IDetailedSkill} from "../../types/ISkill.ts";
import SQLiteIcon from "../../assets/icons/databases/SQLiteIcon.astro"
import MariaIcon from "../../assets/icons/databases/MariaIcon.astro"
import PostgresIcon from "../../assets/icons/databases/PostgreIcon.astro"
import MySQLIcon from "../../assets/icons/databases/MySQLIcon.astro"
import MongoIcon from "../../assets/icons/databases/MongoIcon.astro"
import RedisIcon from "../../assets/icons/databases/RedisIcon.astro"

export const sqlite: IDetailedSkill = {
  key: "sqlite",
  label: "SQLite",
  icon: SQLiteIcon,
  proficiency: 8,
  frequency: 9,
  learningFrom: new Date("2020-01-01"),
};

export const postgresql: IDetailedSkill = {
  key: "postgresql",
  label: "PostgreSQL",
  icon: PostgresIcon,
  proficiency: 7,
  frequency: 7,
  learningFrom: new Date("2021-03-01"),
};

export const mysql: IDetailedSkill = {
  key: "mysql",
  label: "MySQL",
  icon: MySQLIcon,
  proficiency: 7,
  frequency: 5,
  learningFrom: new Date("2021-08-01"),
};

export const mariadb: IDetailedSkill = {
  key: "mariadb",
  label: "MariaDB",
  icon: MariaIcon,
  proficiency: 6,
  frequency: 7,
  learningFrom: new Date("2022-04-01"),
  color: { bg: "#F3E5F5", text: "#4A148C" }
};

export const mongo: IDetailedSkill = {
  key: "mongo",
  label: "MongoDB",
  icon: MongoIcon,
  proficiency: 5,
  frequency: 5,
  learningFrom: new Date("2023-01-01"),
  color: { bg: "#E8F5E9", text: "#1B5E20" }
};

export const redis: IDetailedSkill = {
  key: "redis",
  label: "Redis",
  icon: RedisIcon,
  proficiency: 6,
  frequency: 7,
  learningFrom: new Date("2023-08-01"),
  color: { bg: "#FFEBEE", text: "#B71C1C" }
};
