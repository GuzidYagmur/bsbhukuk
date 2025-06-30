import {
  defineNestedType,
  defineDocumentType,
  makeSource
} from 'contentlayer2/source-files';

const Attorney = defineDocumentType(() => ({
  name: "Attorney",
  filePathPattern: `attorneys/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the attorney",
      required: true,
    },
    date: {
      type: "date",
      description: "The date created",
      required: true,
    },
    image: {
      type: "string",
      description: "The featurted image of the attorney post",
      required: true,
    },
    order: {
      type: "string",
      description: "Order for desc or asc",
      required: true,
    },
    expertise: {
      type: "string",
      description: "The role of the attorney",
      required: true,
    },
    email: {
      type: "string",
      description: "The email address of the attorney",
    },
    phone: {
      type: "string",
      description: "The phone number of the attorney",
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    }
  }
}));

const Practicing = defineDocumentType(() => ({
  name: "Practicing",
  filePathPattern: `practicing-area/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the practicing",
      required: true,
    },
    image: {
      type: "string",
      description: "The featured image of the practicing",
      required: true,
    },
    order: {
      type: "string",
      description: "The order of the practicing",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    }
  }
}));

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    excerpt: {
      type: "string",
      description: "The excerpt of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
    image: {
      type: "string",
      description: "The featured image of the post",
      required: true,
    },
    author: {
      type: "string",
      description: "The author image of the post",
      required: true,
    },
    categories: {
      type: "list",
      of: Category,
      description: "The categories of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    }
  }
}));

const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    title: {
      type: "string",
      description: "The title of the category",
      required: true,
    }
  }
}));



export default makeSource({
  contentDirPath: "content",
  documentTypes: [Attorney, Practicing, Post],
})