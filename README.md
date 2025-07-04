# Apollo GraphQL Odyssey Lift-off Tutorial

🚀 **Catstronauts** - A comprehensive full-stack GraphQL application demonstrating Apollo Server and Apollo Client best practices.

This repository contains the complete implementation from Apollo's "Odyssey Lift-off" tutorial series, showcasing a learning platform for space-related courses.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Apollo GraphQL Concepts Covered](#apollo-graphql-concepts-covered)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Key Features](#key-features)
- [Code Generation](#code-generation)
- [Server Concepts](#server-concepts)
- [Client Concepts](#client-concepts)
- [Best Practices Demonstrated](#best-practices-demonstrated)

## 🌟 Overview

**Catstronauts** is a learning platform that allows users to browse educational tracks about space exploration. Each track contains multiple modules and is created by expert authors. The application demonstrates a complete GraphQL implementation with:

- **Frontend**: React application with Apollo Client
- **Backend**: Apollo Server with REST API integration
- **Schema**: Strongly-typed GraphQL schema with full TypeScript support
- **Code Generation**: Automated type generation for both client and server

## 🛠 Tech Stack

### Server

- **Apollo Server 4** - GraphQL server implementation
- **TypeScript** - Type-safe development
- **GraphQL Code Generator** - Automatic type generation
- **RESTDataSource** - Integration with existing REST APIs
- **Node.js** - Runtime environment

### Client

- **React 18** - Frontend framework
- **Apollo Client 3** - GraphQL client with caching
- **TypeScript** - Type-safe frontend development
- **React Router 6** - Client-side routing
- **Emotion** - CSS-in-JS styling
- **Vite** - Build tool and development server

## 🎓 Apollo GraphQL Concepts Covered

### Core GraphQL Concepts

- [x] **Schema Definition Language (SDL)**
- [x] **Queries** - Data fetching operations
- [x] **Mutations** - Data modification operations
- [x] **Resolvers** - Functions that fetch data for fields
- [x] **Types** - Object types, scalars, enums
- [x] **Fields** - Individual data points in types
- [x] **Arguments** - Parameters for queries and mutations

### Apollo Server Concepts

- [x] **Server Setup** - ApolloServer configuration
- [x] **Context** - Shared data across resolvers
- [x] **DataSources** - Encapsulated data fetching logic
- [x] **RESTDataSource** - REST API integration pattern
- [x] **Error Handling** - Custom error responses
- [x] **Resolver Patterns** - Best practices for resolver implementation
- [x] **Schema Modularity** - Organizing large schemas

### Apollo Client Concepts

- [x] **Client Setup** - ApolloClient configuration
- [x] **ApolloProvider** - React context provider
- [x] **useQuery Hook** - Declarative data fetching
- [x] **useMutation Hook** - Data modifications
- [x] **InMemoryCache** - Apollo's caching solution
- [x] **Loading States** - Handling async operations
- [x] **Error Handling** - Client-side error management
- [x] **TypeScript Integration** - Type-safe queries and mutations

### Advanced Concepts

- [x] **Code Generation** - Automated TypeScript types
- [x] **Fragment Usage** - Query composition
- [x] **Cache Management** - Optimistic updates
- [x] **Variable Handling** - Dynamic queries
- [x] **Testing Setup** - MockedProvider for tests
- [x] **Performance Optimization** - Query result components

## 📁 Project Structure

```
odyssey-lift-off-part1/
├── server/                     # Apollo Server backend
│   ├── src/
│   │   ├── __generated__/      # Generated TypeScript types
│   │   ├── datasources/        # Data source classes
│   │   │   └── track.api.ts    # REST API integration
│   │   ├── context.ts          # GraphQL context definition
│   │   ├── index.ts           # Server entry point
│   │   ├── model.ts           # TypeScript type definitions
│   │   ├── resolvers.ts       # GraphQL resolvers
│   │   └── schema.ts          # GraphQL schema definition
│   ├── codegen.ts             # Code generation config
│   ├── package.json           # Server dependencies
│   └── tsconfig.json          # TypeScript configuration
├── client/                     # React frontend with Apollo Client
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── __generated__/      # Generated GraphQL types
│   │   ├── components/         # Reusable UI components
│   │   │   ├── query-result.tsx    # Query state management
│   │   │   ├── track-detail.tsx    # Track details display
│   │   │   └── layout.tsx          # App layout wrapper
│   │   ├── containers/         # Smart components
│   │   │   └── track-card.tsx  # Track card with mutation
│   │   ├── pages/             # Route components
│   │   │   ├── index.tsx      # Homepage
│   │   │   ├── tracks.tsx     # Tracks listing
│   │   │   └── track.tsx      # Track detail page
│   │   ├── utils/             # Helper functions
│   │   ├── index.tsx          # App entry point
│   │   └── styles.tsx         # Global styles
│   ├── codegen.ts             # Code generation config
│   ├── package.json           # Client dependencies
│   ├── tsconfig.json          # TypeScript configuration
│   └── vite.config.ts         # Vite build configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd odyssey-lift-off-part1
   ```

2. **Install server dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the Apollo Server**

   ```bash
   cd server
   npm run dev
   ```

   Server will be available at `http://localhost:4000`

2. **Start the React client**
   ```bash
   cd client
   npm start
   ```
   Client will be available at `http://localhost:3000`

### Code Generation

Generate TypeScript types from GraphQL schema:

```bash
# Server types generation
cd server
npm run generate

# Client types generation
cd client
npm run generate
```

## ✨ Key Features

### Schema Design

The GraphQL schema demonstrates:

- **Query operations** for data fetching
- **Mutation operations** for data modification
- **Nested relationships** between types
- **Nullable vs non-nullable fields**
- **Custom response types** for mutations

### Track Learning Platform

- Browse educational tracks
- View track details with modules
- Track view counting with mutations
- Author information display
- Responsive design with modern UI

## 🔧 Code Generation

This project demonstrates advanced GraphQL code generation patterns:

### Server-Side Generation (`server/codegen.ts`)

```typescript
const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/__generated__/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../context#DataSourceContext",
        mappers: {
          Track: "../model#TrackModel",
          Author: "../model#AuthorModel",
          Module: "../model#ModuleModel",
        },
      },
    },
  },
};
```

**Features:**

- Generates resolver types with proper context typing
- Maps GraphQL types to TypeScript models
- Provides full type safety for resolver functions

### Client-Side Generation (`client/codegen.ts`)

```typescript
const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./src/__generated__/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};
```

**Features:**

- Scans all `.tsx` files for GraphQL operations
- Generates typed `gql` template literals
- Creates TypeScript types for all operations
- Enables autocomplete and type checking

## 🖥 Server Concepts

### Apollo Server Setup

```typescript
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({
    dataSources: {
      trackAPI: new TrackAPI({ cache }),
    },
  }),
});
```

### RESTDataSource Integration

```typescript
export class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get<TrackModel[]>("tracks");
  }

  incrementTrackViews(trackId: string) {
    return this.patch<TrackModel>(`track/${trackId}/numberOfViews`);
  }
}
```

### Resolver Patterns

- **Query resolvers** for data fetching
- **Mutation resolvers** with error handling
- **Field resolvers** for nested data
- **Context usage** for shared resources

### Error Handling

- Try-catch blocks in mutations
- Custom error responses
- HTTP status code propagation
- User-friendly error messages

## 💻 Client Concepts

### Apollo Client Setup

```typescript
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

<ApolloProvider client={client}>
  <App />
</ApolloProvider>;
```

### useQuery Hook Usage

```typescript
const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      author { name }
    }
  }
`);

const { data, loading, error } = useQuery(TRACKS);
```

### useMutation Hook Usage

```typescript
const INCREMENT_TRACK_VIEWS = gql(`
  mutation IncrementTrackViews($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
    }
  }
`);

const [incrementTrackViews] = useMutation(INCREMENT_TRACK_VIEWS);
```

### Component Patterns

- **QueryResult component** for handling loading/error states
- **Smart vs Presentational components**
- **Fragment usage** for reusable field selection
- **Optimistic updates** for better UX

## 📚 Best Practices Demonstrated

### Schema Design

- ✅ Descriptive field documentation
- ✅ Nullable fields for optional data
- ✅ Custom mutation response types
- ✅ Meaningful error messages
- ✅ Consistent naming conventions

### Server Architecture

- ✅ DataSource pattern for API abstraction
- ✅ Resolver organization by feature
- ✅ Context for dependency injection
- ✅ Type-safe resolver implementations
- ✅ Error handling with proper HTTP codes

### Client Architecture

- ✅ Component composition patterns
- ✅ Loading and error state management
- ✅ Type-safe GraphQL operations
- ✅ Cache optimization strategies
- ✅ Separation of concerns

### Development Workflow

- ✅ Automated code generation
- ✅ TypeScript integration
- ✅ Hot reloading for development
- ✅ Testing utilities setup
- ✅ Consistent code formatting

## 🧪 Testing

The project includes testing utilities:

- **MockedProvider** for Apollo Client testing
- **Custom render functions** for test setup
- **Query and mutation mocking** capabilities

## 📖 Learning Resources

This project implements concepts from:

- [Apollo GraphQL Odyssey](https://odyssey.apollographql.com/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)

## 🤝 Contributing

This is an educational project. Feel free to:

- Experiment with the code
- Add new features
- Improve existing implementations
- Share your learnings

## 📄 License

MIT License - feel free to use this code for learning and development.

---

**Built with ❤️ using Apollo GraphQL**
