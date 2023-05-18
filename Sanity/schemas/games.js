
export default {
    title: 'My games',
    name: 'games',
    type: 'document',
    fields: [
        {
            title: 'Game title',
            name: 'title',
            type: 'string'
        },
        //https://www.sanity.io/docs/slug-type
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                slugify: input => input
                    .toLowerCase()
                    .replace(/[^\w-]+/g, '-')
                    .slice(0, 200)
            }

        },
        {
            title: 'API-ID',
            name: 'api_id',
            type: 'string'
        },
        {
            title: 'Hours played',
            name: 'played_time',
            type: 'number'
        },
        {
            title: 'Genre',
            name: 'genre',
            type: 'array',
            of: [{ type: 'genres' }]
        },
        {
            title: 'Liked',
            name: 'liked',
            type: 'boolean'
        }
    ]
}
