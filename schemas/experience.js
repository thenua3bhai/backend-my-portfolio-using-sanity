import {defineField, defineType} from 'sanity'

export default defineType({
  //from here this name property is used as _type in groq query to query data
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    //for defining field we should use defineField here ,new code sanity uses that,see my prev. sanity portfolio project files comes from sanity
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },

    {
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      title: 'Company',
      type: 'text', //how it works here we use rich text in my prev. sanity portfolio code
    },

    {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'isCurrentWorkingHere',
      title: 'IsCurrentWorkingHere',
      type: 'boolean',
    },

    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
