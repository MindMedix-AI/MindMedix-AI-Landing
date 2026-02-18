import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

// Store the database file in a `data` directory at the project root
const DATA_DIR = path.join(process.cwd(), 'data')
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
}

const DB_PATH = path.join(DATA_DIR, 'contacts.db')

let db: Database.Database

function getDb(): Database.Database {
    if (!db) {
        db = new Database(DB_PATH)
        db.pragma('journal_mode = WAL')
        db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id          INTEGER PRIMARY KEY AUTOINCREMENT,
        name        TEXT NOT NULL,
        email       TEXT NOT NULL,
        organization TEXT,
        interest    TEXT,
        message     TEXT,
        created_at  TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `)
    }
    return db
}

export interface ContactSubmission {
    name: string
    email: string
    organization?: string
    interest?: string
    message?: string
}

export function saveContact(submission: ContactSubmission): number {
    const database = getDb()
    const stmt = database.prepare(`
    INSERT INTO contacts (name, email, organization, interest, message)
    VALUES (@name, @email, @organization, @interest, @message)
  `)
    const result = stmt.run(submission)
    return result.lastInsertRowid as number
}

export function getAllContacts() {
    const database = getDb()
    return database.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all()
}
