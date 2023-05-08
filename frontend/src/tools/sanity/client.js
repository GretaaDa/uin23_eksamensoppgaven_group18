import sanityClient, { createClient } from '@sanity/client'

export const client = createClient({
    projectId: "yatvdv66",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})