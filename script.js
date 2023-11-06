import { readFileSync } from 'node:fs'
import PromptSync from 'prompt-sync'


const prompt = PromptSync({ sigint: true })

let dbUsers = readFileSync("data/users.csv", "utf8")

dbUsers = dbUsers.trim().split("\r\n")

let users = []