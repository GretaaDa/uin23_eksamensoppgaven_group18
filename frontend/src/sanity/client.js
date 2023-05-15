import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "sewmj82l",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})