export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Author of a complete Track */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  /** Author's first and last name */
  name: Scalars['String']['output'];
  /** Author's profile picture url */
  photo?: Maybe<Scalars['String']['output']>;
};

export type IncrementTrackViewsResponse = {
  __typename?: 'IncrementTrackViewsResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
  /** Newly updated track after a successful mutation */
  track?: Maybe<Track>;
};

/** A Module is a single unit of teaching. Multiple Modules compose a Track */
export type Module = {
  __typename?: 'Module';
  id: Scalars['ID']['output'];
  /** The Module's length in minutes */
  length?: Maybe<Scalars['Int']['output']>;
  /** The Module's title */
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  incrementTrackViews?: Maybe<IncrementTrackViewsResponse>;
};


export type MutationIncrementTrackViewsArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** Fetch a specific track, provided a track's ID */
  track?: Maybe<Track>;
  /** Get tracks array for homepage grid */
  tracksForHome: Array<Track>;
};


export type QueryTrackArgs = {
  id: Scalars['ID']['input'];
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  /** The track's main author */
  author: Author;
  /** The track's complete description, can be in Markdown format */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The track's approximate length to complete, in minutes */
  length?: Maybe<Scalars['Int']['output']>;
  /** The track's complete array of Modules */
  modules: Array<Module>;
  /** The number of modules this track contains */
  modulesCount?: Maybe<Scalars['Int']['output']>;
  /** The number of times a track has been viewed */
  numberOfViews?: Maybe<Scalars['Int']['output']>;
  /** The track's main illustration to display in track card or track page detail */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** The track's title */
  title: Scalars['String']['output'];
};

export type IncrementTrackViewsMutationVariables = Exact<{
  incrementTrackViewsId: Scalars['ID']['input'];
}>;


export type IncrementTrackViewsMutation = { __typename?: 'Mutation', incrementTrackViews?: { __typename?: 'IncrementTrackViewsResponse', code: number, success: boolean, message: string, track?: { __typename?: 'Track', id: string, numberOfViews?: number | null } | null } | null };

export type GetTrackQueryVariables = Exact<{
  trackId: Scalars['ID']['input'];
}>;


export type GetTrackQuery = { __typename?: 'Query', track?: { __typename?: 'Track', id: string, title: string, thumbnail?: string | null, length?: number | null, modulesCount?: number | null, numberOfViews?: number | null, description?: string | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null }, modules: Array<{ __typename?: 'Module', id: string, title: string, length?: number | null }> } | null };

export type GetTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTracksQuery = { __typename?: 'Query', tracksForHome: Array<{ __typename?: 'Track', id: string, title: string, thumbnail?: string | null, length?: number | null, modulesCount?: number | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null } }> };
