export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc6f50195ff5f188c477281',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ur4qty7v',
                  apiId: '8c070325-a864-436b-9f83-6c6305f942b3'
                },
                {
                  buildHookId: '5dc6f50121788d101dcbb305',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-j1oshicq',
                  apiId: '8c2b2552-30f7-467b-96ac-ece90e36fe7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/djwhite/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-j1oshicq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
