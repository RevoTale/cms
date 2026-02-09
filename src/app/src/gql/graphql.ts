/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  ai_call_logs?: Maybe<ai_call_logsAccess>;
  authors?: Maybe<authorsAccess>;
  canAccessAdmin: Scalars['Boolean']['output'];
  media?: Maybe<mediaAccess>;
  micro_post_external_links?: Maybe<micro_post_external_linksAccess>;
  micro_posts?: Maybe<micro_postsAccess>;
  payload_jobs?: Maybe<payload_jobsAccess>;
  payload_kv?: Maybe<payload_kvAccess>;
  payload_locked_documents?: Maybe<payload_locked_documentsAccess>;
  payload_preferences?: Maybe<payload_preferencesAccess>;
  payload_query_presets?: Maybe<payload_query_presetsAccess>;
  posts?: Maybe<postsAccess>;
  search?: Maybe<searchAccess>;
  tags?: Maybe<tagsAccess>;
  users?: Maybe<usersAccess>;
};

export type Ai_call_log = {
  __typename?: 'Ai_call_log';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  execution_time: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  input: Scalars['String']['output'];
  output: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
};


export type Ai_call_loguserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Ai_call_log_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Ai_call_log_execution_time_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Ai_call_log_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Ai_call_log_input_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Ai_call_log_output_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Ai_call_log_title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Ai_call_log_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Ai_call_log_user_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Ai_call_log_where = {
  AND?: InputMaybe<Array<InputMaybe<Ai_call_log_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Ai_call_log_where_or>>>;
  createdAt?: InputMaybe<Ai_call_log_createdAt_operator>;
  execution_time?: InputMaybe<Ai_call_log_execution_time_operator>;
  id?: InputMaybe<Ai_call_log_id_operator>;
  input?: InputMaybe<Ai_call_log_input_operator>;
  output?: InputMaybe<Ai_call_log_output_operator>;
  title?: InputMaybe<Ai_call_log_title_operator>;
  updatedAt?: InputMaybe<Ai_call_log_updatedAt_operator>;
  user?: InputMaybe<Ai_call_log_user_operator>;
};

export type Ai_call_log_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Ai_call_log_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Ai_call_log_where_or>>>;
  createdAt?: InputMaybe<Ai_call_log_createdAt_operator>;
  execution_time?: InputMaybe<Ai_call_log_execution_time_operator>;
  id?: InputMaybe<Ai_call_log_id_operator>;
  input?: InputMaybe<Ai_call_log_input_operator>;
  output?: InputMaybe<Ai_call_log_output_operator>;
  title?: InputMaybe<Ai_call_log_title_operator>;
  updatedAt?: InputMaybe<Ai_call_log_updatedAt_operator>;
  user?: InputMaybe<Ai_call_log_user_operator>;
};

export type Ai_call_log_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Ai_call_log_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Ai_call_log_where_or>>>;
  createdAt?: InputMaybe<Ai_call_log_createdAt_operator>;
  execution_time?: InputMaybe<Ai_call_log_execution_time_operator>;
  id?: InputMaybe<Ai_call_log_id_operator>;
  input?: InputMaybe<Ai_call_log_input_operator>;
  output?: InputMaybe<Ai_call_log_output_operator>;
  title?: InputMaybe<Ai_call_log_title_operator>;
  updatedAt?: InputMaybe<Ai_call_log_updatedAt_operator>;
  user?: InputMaybe<Ai_call_log_user_operator>;
};

export type Ai_call_logs = {
  __typename?: 'Ai_call_logs';
  docs: Array<Ai_call_log>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Ai_call_logsCreateAccess = {
  __typename?: 'Ai_call_logsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Ai_call_logsCreateDocAccess = {
  __typename?: 'Ai_call_logsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Ai_call_logsDeleteAccess = {
  __typename?: 'Ai_call_logsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Ai_call_logsDeleteDocAccess = {
  __typename?: 'Ai_call_logsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Ai_call_logsDocAccessFields = {
  __typename?: 'Ai_call_logsDocAccessFields';
  createdAt?: Maybe<Ai_call_logsDocAccessFields_createdAt>;
  execution_time?: Maybe<Ai_call_logsDocAccessFields_execution_time>;
  input?: Maybe<Ai_call_logsDocAccessFields_input>;
  output?: Maybe<Ai_call_logsDocAccessFields_output>;
  title?: Maybe<Ai_call_logsDocAccessFields_title>;
  updatedAt?: Maybe<Ai_call_logsDocAccessFields_updatedAt>;
  user?: Maybe<Ai_call_logsDocAccessFields_user>;
};

export type Ai_call_logsDocAccessFields_createdAt = {
  __typename?: 'Ai_call_logsDocAccessFields_createdAt';
  create?: Maybe<Ai_call_logsDocAccessFields_createdAt_Create>;
  delete?: Maybe<Ai_call_logsDocAccessFields_createdAt_Delete>;
  read?: Maybe<Ai_call_logsDocAccessFields_createdAt_Read>;
  update?: Maybe<Ai_call_logsDocAccessFields_createdAt_Update>;
};

export type Ai_call_logsDocAccessFields_createdAt_Create = {
  __typename?: 'Ai_call_logsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_createdAt_Delete = {
  __typename?: 'Ai_call_logsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_createdAt_Read = {
  __typename?: 'Ai_call_logsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_createdAt_Update = {
  __typename?: 'Ai_call_logsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_execution_time = {
  __typename?: 'Ai_call_logsDocAccessFields_execution_time';
  create?: Maybe<Ai_call_logsDocAccessFields_execution_time_Create>;
  delete?: Maybe<Ai_call_logsDocAccessFields_execution_time_Delete>;
  read?: Maybe<Ai_call_logsDocAccessFields_execution_time_Read>;
  update?: Maybe<Ai_call_logsDocAccessFields_execution_time_Update>;
};

export type Ai_call_logsDocAccessFields_execution_time_Create = {
  __typename?: 'Ai_call_logsDocAccessFields_execution_time_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_execution_time_Delete = {
  __typename?: 'Ai_call_logsDocAccessFields_execution_time_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_execution_time_Read = {
  __typename?: 'Ai_call_logsDocAccessFields_execution_time_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_execution_time_Update = {
  __typename?: 'Ai_call_logsDocAccessFields_execution_time_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_input = {
  __typename?: 'Ai_call_logsDocAccessFields_input';
  create?: Maybe<Ai_call_logsDocAccessFields_input_Create>;
  delete?: Maybe<Ai_call_logsDocAccessFields_input_Delete>;
  read?: Maybe<Ai_call_logsDocAccessFields_input_Read>;
  update?: Maybe<Ai_call_logsDocAccessFields_input_Update>;
};

export type Ai_call_logsDocAccessFields_input_Create = {
  __typename?: 'Ai_call_logsDocAccessFields_input_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_input_Delete = {
  __typename?: 'Ai_call_logsDocAccessFields_input_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_input_Read = {
  __typename?: 'Ai_call_logsDocAccessFields_input_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_input_Update = {
  __typename?: 'Ai_call_logsDocAccessFields_input_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_output = {
  __typename?: 'Ai_call_logsDocAccessFields_output';
  create?: Maybe<Ai_call_logsDocAccessFields_output_Create>;
  delete?: Maybe<Ai_call_logsDocAccessFields_output_Delete>;
  read?: Maybe<Ai_call_logsDocAccessFields_output_Read>;
  update?: Maybe<Ai_call_logsDocAccessFields_output_Update>;
};

export type Ai_call_logsDocAccessFields_output_Create = {
  __typename?: 'Ai_call_logsDocAccessFields_output_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_output_Delete = {
  __typename?: 'Ai_call_logsDocAccessFields_output_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_output_Read = {
  __typename?: 'Ai_call_logsDocAccessFields_output_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_output_Update = {
  __typename?: 'Ai_call_logsDocAccessFields_output_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_title = {
  __typename?: 'Ai_call_logsDocAccessFields_title';
  create?: Maybe<Ai_call_logsDocAccessFields_title_Create>;
  delete?: Maybe<Ai_call_logsDocAccessFields_title_Delete>;
  read?: Maybe<Ai_call_logsDocAccessFields_title_Read>;
  update?: Maybe<Ai_call_logsDocAccessFields_title_Update>;
};

export type Ai_call_logsDocAccessFields_title_Create = {
  __typename?: 'Ai_call_logsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_title_Delete = {
  __typename?: 'Ai_call_logsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_title_Read = {
  __typename?: 'Ai_call_logsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_title_Update = {
  __typename?: 'Ai_call_logsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_updatedAt = {
  __typename?: 'Ai_call_logsDocAccessFields_updatedAt';
  create?: Maybe<Ai_call_logsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<Ai_call_logsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<Ai_call_logsDocAccessFields_updatedAt_Read>;
  update?: Maybe<Ai_call_logsDocAccessFields_updatedAt_Update>;
};

export type Ai_call_logsDocAccessFields_updatedAt_Create = {
  __typename?: 'Ai_call_logsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_updatedAt_Delete = {
  __typename?: 'Ai_call_logsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_updatedAt_Read = {
  __typename?: 'Ai_call_logsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_updatedAt_Update = {
  __typename?: 'Ai_call_logsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_user = {
  __typename?: 'Ai_call_logsDocAccessFields_user';
  create?: Maybe<Ai_call_logsDocAccessFields_user_Create>;
  delete?: Maybe<Ai_call_logsDocAccessFields_user_Delete>;
  read?: Maybe<Ai_call_logsDocAccessFields_user_Read>;
  update?: Maybe<Ai_call_logsDocAccessFields_user_Update>;
};

export type Ai_call_logsDocAccessFields_user_Create = {
  __typename?: 'Ai_call_logsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_user_Delete = {
  __typename?: 'Ai_call_logsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_user_Read = {
  __typename?: 'Ai_call_logsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsDocAccessFields_user_Update = {
  __typename?: 'Ai_call_logsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields = {
  __typename?: 'Ai_call_logsFields';
  createdAt?: Maybe<Ai_call_logsFields_createdAt>;
  execution_time?: Maybe<Ai_call_logsFields_execution_time>;
  input?: Maybe<Ai_call_logsFields_input>;
  output?: Maybe<Ai_call_logsFields_output>;
  title?: Maybe<Ai_call_logsFields_title>;
  updatedAt?: Maybe<Ai_call_logsFields_updatedAt>;
  user?: Maybe<Ai_call_logsFields_user>;
};

export type Ai_call_logsFields_createdAt = {
  __typename?: 'Ai_call_logsFields_createdAt';
  create?: Maybe<Ai_call_logsFields_createdAt_Create>;
  delete?: Maybe<Ai_call_logsFields_createdAt_Delete>;
  read?: Maybe<Ai_call_logsFields_createdAt_Read>;
  update?: Maybe<Ai_call_logsFields_createdAt_Update>;
};

export type Ai_call_logsFields_createdAt_Create = {
  __typename?: 'Ai_call_logsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_createdAt_Delete = {
  __typename?: 'Ai_call_logsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_createdAt_Read = {
  __typename?: 'Ai_call_logsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_createdAt_Update = {
  __typename?: 'Ai_call_logsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_execution_time = {
  __typename?: 'Ai_call_logsFields_execution_time';
  create?: Maybe<Ai_call_logsFields_execution_time_Create>;
  delete?: Maybe<Ai_call_logsFields_execution_time_Delete>;
  read?: Maybe<Ai_call_logsFields_execution_time_Read>;
  update?: Maybe<Ai_call_logsFields_execution_time_Update>;
};

export type Ai_call_logsFields_execution_time_Create = {
  __typename?: 'Ai_call_logsFields_execution_time_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_execution_time_Delete = {
  __typename?: 'Ai_call_logsFields_execution_time_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_execution_time_Read = {
  __typename?: 'Ai_call_logsFields_execution_time_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_execution_time_Update = {
  __typename?: 'Ai_call_logsFields_execution_time_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_input = {
  __typename?: 'Ai_call_logsFields_input';
  create?: Maybe<Ai_call_logsFields_input_Create>;
  delete?: Maybe<Ai_call_logsFields_input_Delete>;
  read?: Maybe<Ai_call_logsFields_input_Read>;
  update?: Maybe<Ai_call_logsFields_input_Update>;
};

export type Ai_call_logsFields_input_Create = {
  __typename?: 'Ai_call_logsFields_input_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_input_Delete = {
  __typename?: 'Ai_call_logsFields_input_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_input_Read = {
  __typename?: 'Ai_call_logsFields_input_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_input_Update = {
  __typename?: 'Ai_call_logsFields_input_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_output = {
  __typename?: 'Ai_call_logsFields_output';
  create?: Maybe<Ai_call_logsFields_output_Create>;
  delete?: Maybe<Ai_call_logsFields_output_Delete>;
  read?: Maybe<Ai_call_logsFields_output_Read>;
  update?: Maybe<Ai_call_logsFields_output_Update>;
};

export type Ai_call_logsFields_output_Create = {
  __typename?: 'Ai_call_logsFields_output_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_output_Delete = {
  __typename?: 'Ai_call_logsFields_output_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_output_Read = {
  __typename?: 'Ai_call_logsFields_output_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_output_Update = {
  __typename?: 'Ai_call_logsFields_output_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_title = {
  __typename?: 'Ai_call_logsFields_title';
  create?: Maybe<Ai_call_logsFields_title_Create>;
  delete?: Maybe<Ai_call_logsFields_title_Delete>;
  read?: Maybe<Ai_call_logsFields_title_Read>;
  update?: Maybe<Ai_call_logsFields_title_Update>;
};

export type Ai_call_logsFields_title_Create = {
  __typename?: 'Ai_call_logsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_title_Delete = {
  __typename?: 'Ai_call_logsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_title_Read = {
  __typename?: 'Ai_call_logsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_title_Update = {
  __typename?: 'Ai_call_logsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_updatedAt = {
  __typename?: 'Ai_call_logsFields_updatedAt';
  create?: Maybe<Ai_call_logsFields_updatedAt_Create>;
  delete?: Maybe<Ai_call_logsFields_updatedAt_Delete>;
  read?: Maybe<Ai_call_logsFields_updatedAt_Read>;
  update?: Maybe<Ai_call_logsFields_updatedAt_Update>;
};

export type Ai_call_logsFields_updatedAt_Create = {
  __typename?: 'Ai_call_logsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_updatedAt_Delete = {
  __typename?: 'Ai_call_logsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_updatedAt_Read = {
  __typename?: 'Ai_call_logsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_updatedAt_Update = {
  __typename?: 'Ai_call_logsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_user = {
  __typename?: 'Ai_call_logsFields_user';
  create?: Maybe<Ai_call_logsFields_user_Create>;
  delete?: Maybe<Ai_call_logsFields_user_Delete>;
  read?: Maybe<Ai_call_logsFields_user_Read>;
  update?: Maybe<Ai_call_logsFields_user_Update>;
};

export type Ai_call_logsFields_user_Create = {
  __typename?: 'Ai_call_logsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_user_Delete = {
  __typename?: 'Ai_call_logsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_user_Read = {
  __typename?: 'Ai_call_logsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsFields_user_Update = {
  __typename?: 'Ai_call_logsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type Ai_call_logsReadAccess = {
  __typename?: 'Ai_call_logsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Ai_call_logsReadDocAccess = {
  __typename?: 'Ai_call_logsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Ai_call_logsUpdateAccess = {
  __typename?: 'Ai_call_logsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Ai_call_logsUpdateDocAccess = {
  __typename?: 'Ai_call_logsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Author = {
  __typename?: 'Author';
  avatar?: Maybe<Media>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  twitter?: Maybe<Author_Twitter>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
};


export type AuthoravatarArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type AuthoruserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Author_Twitter = {
  __typename?: 'Author_Twitter';
  apiKey?: Maybe<Scalars['String']['output']>;
};

export type Author_avatar_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Author_bio_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Author_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Author_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Author_name_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Author_slug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Author_twitter__apiKey_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Author_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Author_user_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Author_where = {
  AND?: InputMaybe<Array<InputMaybe<Author_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Author_where_or>>>;
  avatar?: InputMaybe<Author_avatar_operator>;
  bio?: InputMaybe<Author_bio_operator>;
  createdAt?: InputMaybe<Author_createdAt_operator>;
  id?: InputMaybe<Author_id_operator>;
  name?: InputMaybe<Author_name_operator>;
  slug?: InputMaybe<Author_slug_operator>;
  twitter__apiKey?: InputMaybe<Author_twitter__apiKey_operator>;
  updatedAt?: InputMaybe<Author_updatedAt_operator>;
  user?: InputMaybe<Author_user_operator>;
};

export type Author_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Author_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Author_where_or>>>;
  avatar?: InputMaybe<Author_avatar_operator>;
  bio?: InputMaybe<Author_bio_operator>;
  createdAt?: InputMaybe<Author_createdAt_operator>;
  id?: InputMaybe<Author_id_operator>;
  name?: InputMaybe<Author_name_operator>;
  slug?: InputMaybe<Author_slug_operator>;
  twitter__apiKey?: InputMaybe<Author_twitter__apiKey_operator>;
  updatedAt?: InputMaybe<Author_updatedAt_operator>;
  user?: InputMaybe<Author_user_operator>;
};

export type Author_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Author_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Author_where_or>>>;
  avatar?: InputMaybe<Author_avatar_operator>;
  bio?: InputMaybe<Author_bio_operator>;
  createdAt?: InputMaybe<Author_createdAt_operator>;
  id?: InputMaybe<Author_id_operator>;
  name?: InputMaybe<Author_name_operator>;
  slug?: InputMaybe<Author_slug_operator>;
  twitter__apiKey?: InputMaybe<Author_twitter__apiKey_operator>;
  updatedAt?: InputMaybe<Author_updatedAt_operator>;
  user?: InputMaybe<Author_user_operator>;
};

export type Authors = {
  __typename?: 'Authors';
  docs: Array<Author>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type AuthorsCreateAccess = {
  __typename?: 'AuthorsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AuthorsCreateDocAccess = {
  __typename?: 'AuthorsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AuthorsDeleteAccess = {
  __typename?: 'AuthorsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AuthorsDeleteDocAccess = {
  __typename?: 'AuthorsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AuthorsDocAccessFields = {
  __typename?: 'AuthorsDocAccessFields';
  avatar?: Maybe<AuthorsDocAccessFields_avatar>;
  bio?: Maybe<AuthorsDocAccessFields_bio>;
  createdAt?: Maybe<AuthorsDocAccessFields_createdAt>;
  name?: Maybe<AuthorsDocAccessFields_name>;
  slug?: Maybe<AuthorsDocAccessFields_slug>;
  twitter?: Maybe<AuthorsDocAccessFields_twitter>;
  updatedAt?: Maybe<AuthorsDocAccessFields_updatedAt>;
  user?: Maybe<AuthorsDocAccessFields_user>;
};

export type AuthorsDocAccessFields_avatar = {
  __typename?: 'AuthorsDocAccessFields_avatar';
  create?: Maybe<AuthorsDocAccessFields_avatar_Create>;
  delete?: Maybe<AuthorsDocAccessFields_avatar_Delete>;
  read?: Maybe<AuthorsDocAccessFields_avatar_Read>;
  update?: Maybe<AuthorsDocAccessFields_avatar_Update>;
};

export type AuthorsDocAccessFields_avatar_Create = {
  __typename?: 'AuthorsDocAccessFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_avatar_Delete = {
  __typename?: 'AuthorsDocAccessFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_avatar_Read = {
  __typename?: 'AuthorsDocAccessFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_avatar_Update = {
  __typename?: 'AuthorsDocAccessFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_bio = {
  __typename?: 'AuthorsDocAccessFields_bio';
  create?: Maybe<AuthorsDocAccessFields_bio_Create>;
  delete?: Maybe<AuthorsDocAccessFields_bio_Delete>;
  read?: Maybe<AuthorsDocAccessFields_bio_Read>;
  update?: Maybe<AuthorsDocAccessFields_bio_Update>;
};

export type AuthorsDocAccessFields_bio_Create = {
  __typename?: 'AuthorsDocAccessFields_bio_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_bio_Delete = {
  __typename?: 'AuthorsDocAccessFields_bio_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_bio_Read = {
  __typename?: 'AuthorsDocAccessFields_bio_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_bio_Update = {
  __typename?: 'AuthorsDocAccessFields_bio_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_createdAt = {
  __typename?: 'AuthorsDocAccessFields_createdAt';
  create?: Maybe<AuthorsDocAccessFields_createdAt_Create>;
  delete?: Maybe<AuthorsDocAccessFields_createdAt_Delete>;
  read?: Maybe<AuthorsDocAccessFields_createdAt_Read>;
  update?: Maybe<AuthorsDocAccessFields_createdAt_Update>;
};

export type AuthorsDocAccessFields_createdAt_Create = {
  __typename?: 'AuthorsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_createdAt_Delete = {
  __typename?: 'AuthorsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_createdAt_Read = {
  __typename?: 'AuthorsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_createdAt_Update = {
  __typename?: 'AuthorsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_name = {
  __typename?: 'AuthorsDocAccessFields_name';
  create?: Maybe<AuthorsDocAccessFields_name_Create>;
  delete?: Maybe<AuthorsDocAccessFields_name_Delete>;
  read?: Maybe<AuthorsDocAccessFields_name_Read>;
  update?: Maybe<AuthorsDocAccessFields_name_Update>;
};

export type AuthorsDocAccessFields_name_Create = {
  __typename?: 'AuthorsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_name_Delete = {
  __typename?: 'AuthorsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_name_Read = {
  __typename?: 'AuthorsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_name_Update = {
  __typename?: 'AuthorsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_slug = {
  __typename?: 'AuthorsDocAccessFields_slug';
  create?: Maybe<AuthorsDocAccessFields_slug_Create>;
  delete?: Maybe<AuthorsDocAccessFields_slug_Delete>;
  read?: Maybe<AuthorsDocAccessFields_slug_Read>;
  update?: Maybe<AuthorsDocAccessFields_slug_Update>;
};

export type AuthorsDocAccessFields_slug_Create = {
  __typename?: 'AuthorsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_slug_Delete = {
  __typename?: 'AuthorsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_slug_Read = {
  __typename?: 'AuthorsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_slug_Update = {
  __typename?: 'AuthorsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_twitter = {
  __typename?: 'AuthorsDocAccessFields_twitter';
  create?: Maybe<AuthorsDocAccessFields_twitter_Create>;
  delete?: Maybe<AuthorsDocAccessFields_twitter_Delete>;
  fields?: Maybe<AuthorsDocAccessFields_twitter_Fields>;
  read?: Maybe<AuthorsDocAccessFields_twitter_Read>;
  update?: Maybe<AuthorsDocAccessFields_twitter_Update>;
};

export type AuthorsDocAccessFields_twitter_Create = {
  __typename?: 'AuthorsDocAccessFields_twitter_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_twitter_Delete = {
  __typename?: 'AuthorsDocAccessFields_twitter_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_twitter_Fields = {
  __typename?: 'AuthorsDocAccessFields_twitter_Fields';
  apiKey?: Maybe<AuthorsDocAccessFields_twitter_apiKey>;
};

export type AuthorsDocAccessFields_twitter_Read = {
  __typename?: 'AuthorsDocAccessFields_twitter_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_twitter_Update = {
  __typename?: 'AuthorsDocAccessFields_twitter_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_twitter_apiKey = {
  __typename?: 'AuthorsDocAccessFields_twitter_apiKey';
  create?: Maybe<AuthorsDocAccessFields_twitter_apiKey_Create>;
  delete?: Maybe<AuthorsDocAccessFields_twitter_apiKey_Delete>;
  read?: Maybe<AuthorsDocAccessFields_twitter_apiKey_Read>;
  update?: Maybe<AuthorsDocAccessFields_twitter_apiKey_Update>;
};

export type AuthorsDocAccessFields_twitter_apiKey_Create = {
  __typename?: 'AuthorsDocAccessFields_twitter_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_twitter_apiKey_Delete = {
  __typename?: 'AuthorsDocAccessFields_twitter_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_twitter_apiKey_Read = {
  __typename?: 'AuthorsDocAccessFields_twitter_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_twitter_apiKey_Update = {
  __typename?: 'AuthorsDocAccessFields_twitter_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_updatedAt = {
  __typename?: 'AuthorsDocAccessFields_updatedAt';
  create?: Maybe<AuthorsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<AuthorsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<AuthorsDocAccessFields_updatedAt_Read>;
  update?: Maybe<AuthorsDocAccessFields_updatedAt_Update>;
};

export type AuthorsDocAccessFields_updatedAt_Create = {
  __typename?: 'AuthorsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_updatedAt_Delete = {
  __typename?: 'AuthorsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_updatedAt_Read = {
  __typename?: 'AuthorsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_updatedAt_Update = {
  __typename?: 'AuthorsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_user = {
  __typename?: 'AuthorsDocAccessFields_user';
  create?: Maybe<AuthorsDocAccessFields_user_Create>;
  delete?: Maybe<AuthorsDocAccessFields_user_Delete>;
  read?: Maybe<AuthorsDocAccessFields_user_Read>;
  update?: Maybe<AuthorsDocAccessFields_user_Update>;
};

export type AuthorsDocAccessFields_user_Create = {
  __typename?: 'AuthorsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_user_Delete = {
  __typename?: 'AuthorsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_user_Read = {
  __typename?: 'AuthorsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsDocAccessFields_user_Update = {
  __typename?: 'AuthorsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields = {
  __typename?: 'AuthorsFields';
  avatar?: Maybe<AuthorsFields_avatar>;
  bio?: Maybe<AuthorsFields_bio>;
  createdAt?: Maybe<AuthorsFields_createdAt>;
  name?: Maybe<AuthorsFields_name>;
  slug?: Maybe<AuthorsFields_slug>;
  twitter?: Maybe<AuthorsFields_twitter>;
  updatedAt?: Maybe<AuthorsFields_updatedAt>;
  user?: Maybe<AuthorsFields_user>;
};

export type AuthorsFields_avatar = {
  __typename?: 'AuthorsFields_avatar';
  create?: Maybe<AuthorsFields_avatar_Create>;
  delete?: Maybe<AuthorsFields_avatar_Delete>;
  read?: Maybe<AuthorsFields_avatar_Read>;
  update?: Maybe<AuthorsFields_avatar_Update>;
};

export type AuthorsFields_avatar_Create = {
  __typename?: 'AuthorsFields_avatar_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_avatar_Delete = {
  __typename?: 'AuthorsFields_avatar_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_avatar_Read = {
  __typename?: 'AuthorsFields_avatar_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_avatar_Update = {
  __typename?: 'AuthorsFields_avatar_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_bio = {
  __typename?: 'AuthorsFields_bio';
  create?: Maybe<AuthorsFields_bio_Create>;
  delete?: Maybe<AuthorsFields_bio_Delete>;
  read?: Maybe<AuthorsFields_bio_Read>;
  update?: Maybe<AuthorsFields_bio_Update>;
};

export type AuthorsFields_bio_Create = {
  __typename?: 'AuthorsFields_bio_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_bio_Delete = {
  __typename?: 'AuthorsFields_bio_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_bio_Read = {
  __typename?: 'AuthorsFields_bio_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_bio_Update = {
  __typename?: 'AuthorsFields_bio_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_createdAt = {
  __typename?: 'AuthorsFields_createdAt';
  create?: Maybe<AuthorsFields_createdAt_Create>;
  delete?: Maybe<AuthorsFields_createdAt_Delete>;
  read?: Maybe<AuthorsFields_createdAt_Read>;
  update?: Maybe<AuthorsFields_createdAt_Update>;
};

export type AuthorsFields_createdAt_Create = {
  __typename?: 'AuthorsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_createdAt_Delete = {
  __typename?: 'AuthorsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_createdAt_Read = {
  __typename?: 'AuthorsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_createdAt_Update = {
  __typename?: 'AuthorsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_name = {
  __typename?: 'AuthorsFields_name';
  create?: Maybe<AuthorsFields_name_Create>;
  delete?: Maybe<AuthorsFields_name_Delete>;
  read?: Maybe<AuthorsFields_name_Read>;
  update?: Maybe<AuthorsFields_name_Update>;
};

export type AuthorsFields_name_Create = {
  __typename?: 'AuthorsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_name_Delete = {
  __typename?: 'AuthorsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_name_Read = {
  __typename?: 'AuthorsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_name_Update = {
  __typename?: 'AuthorsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_slug = {
  __typename?: 'AuthorsFields_slug';
  create?: Maybe<AuthorsFields_slug_Create>;
  delete?: Maybe<AuthorsFields_slug_Delete>;
  read?: Maybe<AuthorsFields_slug_Read>;
  update?: Maybe<AuthorsFields_slug_Update>;
};

export type AuthorsFields_slug_Create = {
  __typename?: 'AuthorsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_slug_Delete = {
  __typename?: 'AuthorsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_slug_Read = {
  __typename?: 'AuthorsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_slug_Update = {
  __typename?: 'AuthorsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_twitter = {
  __typename?: 'AuthorsFields_twitter';
  create?: Maybe<AuthorsFields_twitter_Create>;
  delete?: Maybe<AuthorsFields_twitter_Delete>;
  fields?: Maybe<AuthorsFields_twitter_Fields>;
  read?: Maybe<AuthorsFields_twitter_Read>;
  update?: Maybe<AuthorsFields_twitter_Update>;
};

export type AuthorsFields_twitter_Create = {
  __typename?: 'AuthorsFields_twitter_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_twitter_Delete = {
  __typename?: 'AuthorsFields_twitter_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_twitter_Fields = {
  __typename?: 'AuthorsFields_twitter_Fields';
  apiKey?: Maybe<AuthorsFields_twitter_apiKey>;
};

export type AuthorsFields_twitter_Read = {
  __typename?: 'AuthorsFields_twitter_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_twitter_Update = {
  __typename?: 'AuthorsFields_twitter_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_twitter_apiKey = {
  __typename?: 'AuthorsFields_twitter_apiKey';
  create?: Maybe<AuthorsFields_twitter_apiKey_Create>;
  delete?: Maybe<AuthorsFields_twitter_apiKey_Delete>;
  read?: Maybe<AuthorsFields_twitter_apiKey_Read>;
  update?: Maybe<AuthorsFields_twitter_apiKey_Update>;
};

export type AuthorsFields_twitter_apiKey_Create = {
  __typename?: 'AuthorsFields_twitter_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_twitter_apiKey_Delete = {
  __typename?: 'AuthorsFields_twitter_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_twitter_apiKey_Read = {
  __typename?: 'AuthorsFields_twitter_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_twitter_apiKey_Update = {
  __typename?: 'AuthorsFields_twitter_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_updatedAt = {
  __typename?: 'AuthorsFields_updatedAt';
  create?: Maybe<AuthorsFields_updatedAt_Create>;
  delete?: Maybe<AuthorsFields_updatedAt_Delete>;
  read?: Maybe<AuthorsFields_updatedAt_Read>;
  update?: Maybe<AuthorsFields_updatedAt_Update>;
};

export type AuthorsFields_updatedAt_Create = {
  __typename?: 'AuthorsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_updatedAt_Delete = {
  __typename?: 'AuthorsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_updatedAt_Read = {
  __typename?: 'AuthorsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_updatedAt_Update = {
  __typename?: 'AuthorsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_user = {
  __typename?: 'AuthorsFields_user';
  create?: Maybe<AuthorsFields_user_Create>;
  delete?: Maybe<AuthorsFields_user_Delete>;
  read?: Maybe<AuthorsFields_user_Read>;
  update?: Maybe<AuthorsFields_user_Update>;
};

export type AuthorsFields_user_Create = {
  __typename?: 'AuthorsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_user_Delete = {
  __typename?: 'AuthorsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_user_Read = {
  __typename?: 'AuthorsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsFields_user_Update = {
  __typename?: 'AuthorsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type AuthorsReadAccess = {
  __typename?: 'AuthorsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AuthorsReadDocAccess = {
  __typename?: 'AuthorsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AuthorsUpdateAccess = {
  __typename?: 'AuthorsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AuthorsUpdateDocAccess = {
  __typename?: 'AuthorsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum FallbackLocaleInputType {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  None = 'none',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export enum LocaleInputType {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_alt>;
  caption?: Maybe<MediaDocAccessFields_caption>;
  createdAt?: Maybe<MediaDocAccessFields_createdAt>;
  description?: Maybe<MediaDocAccessFields_description>;
  filename?: Maybe<MediaDocAccessFields_filename>;
  filesize?: Maybe<MediaDocAccessFields_filesize>;
  focalX?: Maybe<MediaDocAccessFields_focalX>;
  focalY?: Maybe<MediaDocAccessFields_focalY>;
  height?: Maybe<MediaDocAccessFields_height>;
  mimeType?: Maybe<MediaDocAccessFields_mimeType>;
  prefix?: Maybe<MediaDocAccessFields_prefix>;
  thumbnailURL?: Maybe<MediaDocAccessFields_thumbnailURL>;
  updatedAt?: Maybe<MediaDocAccessFields_updatedAt>;
  url?: Maybe<MediaDocAccessFields_url>;
  width?: Maybe<MediaDocAccessFields_width>;
};

export type MediaDocAccessFields_alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_alt_Create>;
  delete?: Maybe<MediaDocAccessFields_alt_Delete>;
  read?: Maybe<MediaDocAccessFields_alt_Read>;
  update?: Maybe<MediaDocAccessFields_alt_Update>;
};

export type MediaDocAccessFields_alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_caption = {
  __typename?: 'MediaDocAccessFields_caption';
  create?: Maybe<MediaDocAccessFields_caption_Create>;
  delete?: Maybe<MediaDocAccessFields_caption_Delete>;
  read?: Maybe<MediaDocAccessFields_caption_Read>;
  update?: Maybe<MediaDocAccessFields_caption_Update>;
};

export type MediaDocAccessFields_caption_Create = {
  __typename?: 'MediaDocAccessFields_caption_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_caption_Delete = {
  __typename?: 'MediaDocAccessFields_caption_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_caption_Read = {
  __typename?: 'MediaDocAccessFields_caption_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_caption_Update = {
  __typename?: 'MediaDocAccessFields_caption_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_createdAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_createdAt_Create>;
  delete?: Maybe<MediaDocAccessFields_createdAt_Delete>;
  read?: Maybe<MediaDocAccessFields_createdAt_Read>;
  update?: Maybe<MediaDocAccessFields_createdAt_Update>;
};

export type MediaDocAccessFields_createdAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_createdAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_createdAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_createdAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_description = {
  __typename?: 'MediaDocAccessFields_description';
  create?: Maybe<MediaDocAccessFields_description_Create>;
  delete?: Maybe<MediaDocAccessFields_description_Delete>;
  read?: Maybe<MediaDocAccessFields_description_Read>;
  update?: Maybe<MediaDocAccessFields_description_Update>;
};

export type MediaDocAccessFields_description_Create = {
  __typename?: 'MediaDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_description_Delete = {
  __typename?: 'MediaDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_description_Read = {
  __typename?: 'MediaDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_description_Update = {
  __typename?: 'MediaDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_filename_Create>;
  delete?: Maybe<MediaDocAccessFields_filename_Delete>;
  read?: Maybe<MediaDocAccessFields_filename_Read>;
  update?: Maybe<MediaDocAccessFields_filename_Update>;
};

export type MediaDocAccessFields_filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_filesize_Read>;
  update?: Maybe<MediaDocAccessFields_filesize_Update>;
};

export type MediaDocAccessFields_filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_focalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_focalX_Create>;
  delete?: Maybe<MediaDocAccessFields_focalX_Delete>;
  read?: Maybe<MediaDocAccessFields_focalX_Read>;
  update?: Maybe<MediaDocAccessFields_focalX_Update>;
};

export type MediaDocAccessFields_focalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_focalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_focalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_focalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_focalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_focalY_Create>;
  delete?: Maybe<MediaDocAccessFields_focalY_Delete>;
  read?: Maybe<MediaDocAccessFields_focalY_Read>;
  update?: Maybe<MediaDocAccessFields_focalY_Update>;
};

export type MediaDocAccessFields_focalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_focalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_focalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_focalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_height_Create>;
  delete?: Maybe<MediaDocAccessFields_height_Delete>;
  read?: Maybe<MediaDocAccessFields_height_Read>;
  update?: Maybe<MediaDocAccessFields_height_Update>;
};

export type MediaDocAccessFields_height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_mimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_mimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_mimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_mimeType_Read>;
  update?: Maybe<MediaDocAccessFields_mimeType_Update>;
};

export type MediaDocAccessFields_mimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_mimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_mimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_mimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_prefix = {
  __typename?: 'MediaDocAccessFields_prefix';
  create?: Maybe<MediaDocAccessFields_prefix_Create>;
  delete?: Maybe<MediaDocAccessFields_prefix_Delete>;
  read?: Maybe<MediaDocAccessFields_prefix_Read>;
  update?: Maybe<MediaDocAccessFields_prefix_Update>;
};

export type MediaDocAccessFields_prefix_Create = {
  __typename?: 'MediaDocAccessFields_prefix_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_prefix_Delete = {
  __typename?: 'MediaDocAccessFields_prefix_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_prefix_Read = {
  __typename?: 'MediaDocAccessFields_prefix_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_prefix_Update = {
  __typename?: 'MediaDocAccessFields_prefix_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_thumbnailURL = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_thumbnailURL_Create>;
  delete?: Maybe<MediaDocAccessFields_thumbnailURL_Delete>;
  read?: Maybe<MediaDocAccessFields_thumbnailURL_Read>;
  update?: Maybe<MediaDocAccessFields_thumbnailURL_Update>;
};

export type MediaDocAccessFields_thumbnailURL_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_thumbnailURL_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_thumbnailURL_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_thumbnailURL_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_updatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_updatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_updatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_updatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_updatedAt_Update>;
};

export type MediaDocAccessFields_updatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_updatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_updatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_updatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_url_Create>;
  delete?: Maybe<MediaDocAccessFields_url_Delete>;
  read?: Maybe<MediaDocAccessFields_url_Read>;
  update?: Maybe<MediaDocAccessFields_url_Update>;
};

export type MediaDocAccessFields_url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_width_Create>;
  delete?: Maybe<MediaDocAccessFields_width_Delete>;
  read?: Maybe<MediaDocAccessFields_width_Read>;
  update?: Maybe<MediaDocAccessFields_width_Update>;
};

export type MediaDocAccessFields_width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_alt>;
  caption?: Maybe<MediaFields_caption>;
  createdAt?: Maybe<MediaFields_createdAt>;
  description?: Maybe<MediaFields_description>;
  filename?: Maybe<MediaFields_filename>;
  filesize?: Maybe<MediaFields_filesize>;
  focalX?: Maybe<MediaFields_focalX>;
  focalY?: Maybe<MediaFields_focalY>;
  height?: Maybe<MediaFields_height>;
  mimeType?: Maybe<MediaFields_mimeType>;
  prefix?: Maybe<MediaFields_prefix>;
  thumbnailURL?: Maybe<MediaFields_thumbnailURL>;
  updatedAt?: Maybe<MediaFields_updatedAt>;
  url?: Maybe<MediaFields_url>;
  width?: Maybe<MediaFields_width>;
};

export type MediaFields_alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_alt_Create>;
  delete?: Maybe<MediaFields_alt_Delete>;
  read?: Maybe<MediaFields_alt_Read>;
  update?: Maybe<MediaFields_alt_Update>;
};

export type MediaFields_alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_caption = {
  __typename?: 'MediaFields_caption';
  create?: Maybe<MediaFields_caption_Create>;
  delete?: Maybe<MediaFields_caption_Delete>;
  read?: Maybe<MediaFields_caption_Read>;
  update?: Maybe<MediaFields_caption_Update>;
};

export type MediaFields_caption_Create = {
  __typename?: 'MediaFields_caption_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_caption_Delete = {
  __typename?: 'MediaFields_caption_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_caption_Read = {
  __typename?: 'MediaFields_caption_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_caption_Update = {
  __typename?: 'MediaFields_caption_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_createdAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_createdAt_Create>;
  delete?: Maybe<MediaFields_createdAt_Delete>;
  read?: Maybe<MediaFields_createdAt_Read>;
  update?: Maybe<MediaFields_createdAt_Update>;
};

export type MediaFields_createdAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_createdAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_createdAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_createdAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_description = {
  __typename?: 'MediaFields_description';
  create?: Maybe<MediaFields_description_Create>;
  delete?: Maybe<MediaFields_description_Delete>;
  read?: Maybe<MediaFields_description_Read>;
  update?: Maybe<MediaFields_description_Update>;
};

export type MediaFields_description_Create = {
  __typename?: 'MediaFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_description_Delete = {
  __typename?: 'MediaFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_description_Read = {
  __typename?: 'MediaFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_description_Update = {
  __typename?: 'MediaFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_filename_Create>;
  delete?: Maybe<MediaFields_filename_Delete>;
  read?: Maybe<MediaFields_filename_Read>;
  update?: Maybe<MediaFields_filename_Update>;
};

export type MediaFields_filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_filesize_Create>;
  delete?: Maybe<MediaFields_filesize_Delete>;
  read?: Maybe<MediaFields_filesize_Read>;
  update?: Maybe<MediaFields_filesize_Update>;
};

export type MediaFields_filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_focalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_focalX_Create>;
  delete?: Maybe<MediaFields_focalX_Delete>;
  read?: Maybe<MediaFields_focalX_Read>;
  update?: Maybe<MediaFields_focalX_Update>;
};

export type MediaFields_focalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_focalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_focalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_focalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_focalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_focalY_Create>;
  delete?: Maybe<MediaFields_focalY_Delete>;
  read?: Maybe<MediaFields_focalY_Read>;
  update?: Maybe<MediaFields_focalY_Update>;
};

export type MediaFields_focalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_focalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_focalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_focalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_height_Create>;
  delete?: Maybe<MediaFields_height_Delete>;
  read?: Maybe<MediaFields_height_Read>;
  update?: Maybe<MediaFields_height_Update>;
};

export type MediaFields_height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_mimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_mimeType_Create>;
  delete?: Maybe<MediaFields_mimeType_Delete>;
  read?: Maybe<MediaFields_mimeType_Read>;
  update?: Maybe<MediaFields_mimeType_Update>;
};

export type MediaFields_mimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_mimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_mimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_mimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_prefix = {
  __typename?: 'MediaFields_prefix';
  create?: Maybe<MediaFields_prefix_Create>;
  delete?: Maybe<MediaFields_prefix_Delete>;
  read?: Maybe<MediaFields_prefix_Read>;
  update?: Maybe<MediaFields_prefix_Update>;
};

export type MediaFields_prefix_Create = {
  __typename?: 'MediaFields_prefix_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_prefix_Delete = {
  __typename?: 'MediaFields_prefix_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_prefix_Read = {
  __typename?: 'MediaFields_prefix_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_prefix_Update = {
  __typename?: 'MediaFields_prefix_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_thumbnailURL = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_thumbnailURL_Create>;
  delete?: Maybe<MediaFields_thumbnailURL_Delete>;
  read?: Maybe<MediaFields_thumbnailURL_Read>;
  update?: Maybe<MediaFields_thumbnailURL_Update>;
};

export type MediaFields_thumbnailURL_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_thumbnailURL_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_thumbnailURL_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_thumbnailURL_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_updatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_updatedAt_Create>;
  delete?: Maybe<MediaFields_updatedAt_Delete>;
  read?: Maybe<MediaFields_updatedAt_Read>;
  update?: Maybe<MediaFields_updatedAt_Update>;
};

export type MediaFields_updatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_updatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_updatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_updatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_url_Create>;
  delete?: Maybe<MediaFields_url_Delete>;
  read?: Maybe<MediaFields_url_Read>;
  update?: Maybe<MediaFields_url_Update>;
};

export type MediaFields_url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_width_Create>;
  delete?: Maybe<MediaFields_width_Delete>;
  read?: Maybe<MediaFields_width_Read>;
  update?: Maybe<MediaFields_width_Update>;
};

export type MediaFields_width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_alt_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_caption_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_description_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_filename_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_filesize_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_focalX_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_focalY_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_height_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_mimeType_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_prefix_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_thumbnailURL_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_url_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_where = {
  AND?: InputMaybe<Array<InputMaybe<Media_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_where_or>>>;
  alt?: InputMaybe<Media_alt_operator>;
  caption?: InputMaybe<Media_caption_operator>;
  createdAt?: InputMaybe<Media_createdAt_operator>;
  description?: InputMaybe<Media_description_operator>;
  filename?: InputMaybe<Media_filename_operator>;
  filesize?: InputMaybe<Media_filesize_operator>;
  focalX?: InputMaybe<Media_focalX_operator>;
  focalY?: InputMaybe<Media_focalY_operator>;
  height?: InputMaybe<Media_height_operator>;
  id?: InputMaybe<Media_id_operator>;
  mimeType?: InputMaybe<Media_mimeType_operator>;
  prefix?: InputMaybe<Media_prefix_operator>;
  thumbnailURL?: InputMaybe<Media_thumbnailURL_operator>;
  updatedAt?: InputMaybe<Media_updatedAt_operator>;
  url?: InputMaybe<Media_url_operator>;
  width?: InputMaybe<Media_width_operator>;
};

export type Media_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Media_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_where_or>>>;
  alt?: InputMaybe<Media_alt_operator>;
  caption?: InputMaybe<Media_caption_operator>;
  createdAt?: InputMaybe<Media_createdAt_operator>;
  description?: InputMaybe<Media_description_operator>;
  filename?: InputMaybe<Media_filename_operator>;
  filesize?: InputMaybe<Media_filesize_operator>;
  focalX?: InputMaybe<Media_focalX_operator>;
  focalY?: InputMaybe<Media_focalY_operator>;
  height?: InputMaybe<Media_height_operator>;
  id?: InputMaybe<Media_id_operator>;
  mimeType?: InputMaybe<Media_mimeType_operator>;
  prefix?: InputMaybe<Media_prefix_operator>;
  thumbnailURL?: InputMaybe<Media_thumbnailURL_operator>;
  updatedAt?: InputMaybe<Media_updatedAt_operator>;
  url?: InputMaybe<Media_url_operator>;
  width?: InputMaybe<Media_width_operator>;
};

export type Media_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Media_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_where_or>>>;
  alt?: InputMaybe<Media_alt_operator>;
  caption?: InputMaybe<Media_caption_operator>;
  createdAt?: InputMaybe<Media_createdAt_operator>;
  description?: InputMaybe<Media_description_operator>;
  filename?: InputMaybe<Media_filename_operator>;
  filesize?: InputMaybe<Media_filesize_operator>;
  focalX?: InputMaybe<Media_focalX_operator>;
  focalY?: InputMaybe<Media_focalY_operator>;
  height?: InputMaybe<Media_height_operator>;
  id?: InputMaybe<Media_id_operator>;
  mimeType?: InputMaybe<Media_mimeType_operator>;
  prefix?: InputMaybe<Media_prefix_operator>;
  thumbnailURL?: InputMaybe<Media_thumbnailURL_operator>;
  updatedAt?: InputMaybe<Media_updatedAt_operator>;
  url?: InputMaybe<Media_url_operator>;
  width?: InputMaybe<Media_width_operator>;
};

export type Media_width_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Micro_post = {
  __typename?: 'Micro_post';
  _status?: Maybe<Micro_post__status>;
  attachment?: Maybe<Media>;
  authorSlug?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Array<Author>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cronTranslationLocalesQueued?: Maybe<Array<Micro_post_cronTranslationLocalesQueued>>;
  externalLinks?: Maybe<Array<Micro_post_external_link>>;
  id: Scalars['String']['output'];
  linkedMicroPosts?: Maybe<Array<Micro_post>>;
  meta?: Maybe<Micro_post_Meta>;
  post_type?: Maybe<Micro_post_post_type>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  social?: Maybe<Micro_post_Social>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type Micro_postattachmentArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Micro_postauthorsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Micro_postexternalLinksArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Micro_postlinkedMicroPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Micro_posttagsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum Micro_postUpdate__status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export enum Micro_postUpdate_cronTranslationLocalesQueued_MutationInput {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export enum Micro_postUpdate_post_type_MutationInput {
  Long = 'long',
  Short = 'short'
}

export type Micro_postVersion = {
  __typename?: 'Micro_postVersion';
  autosave?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Micro_post>;
  publishedLocale?: Maybe<Micro_postVersion_publishedLocale>;
  snapshot?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Micro_postVersion_Version>;
};


export type Micro_postVersionparentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Micro_postVersion_Version = {
  __typename?: 'Micro_postVersion_Version';
  _status?: Maybe<Micro_postVersion_Version__status>;
  attachment?: Maybe<Media>;
  authorSlug?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Array<Author>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  cronTranslationLocalesQueued?: Maybe<Array<Micro_postVersion_Version_cronTranslationLocalesQueued>>;
  externalLinks?: Maybe<Array<Micro_post_external_link>>;
  linkedMicroPosts?: Maybe<Array<Micro_post>>;
  meta?: Maybe<Micro_postVersion_Version_Meta>;
  post_type?: Maybe<Micro_postVersion_Version_post_type>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  social?: Maybe<Micro_postVersion_Version_Social>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type Micro_postVersion_VersionattachmentArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Micro_postVersion_VersionauthorsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Micro_postVersion_VersionexternalLinksArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Micro_postVersion_VersionlinkedMicroPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type Micro_postVersion_VersiontagsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Micro_postVersion_Version_Meta = {
  __typename?: 'Micro_postVersion_Version_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Micro_postVersion_Version_MetaimageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Micro_postVersion_Version_Social = {
  __typename?: 'Micro_postVersion_Version_Social';
  x?: Maybe<Micro_postVersion_Version_Social_X>;
};

export type Micro_postVersion_Version_Social_X = {
  __typename?: 'Micro_postVersion_Version_Social_X';
  autoPost?: Maybe<Scalars['Boolean']['output']>;
  autoPosted?: Maybe<Scalars['Boolean']['output']>;
  autoPostedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum Micro_postVersion_Version__status {
  Draft = 'draft',
  Published = 'published'
}

export enum Micro_postVersion_Version_cronTranslationLocalesQueued {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export enum Micro_postVersion_Version_post_type {
  Long = 'long',
  Short = 'short'
}

export enum Micro_postVersion_publishedLocale {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export type Micro_post_Meta = {
  __typename?: 'Micro_post_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Micro_post_MetaimageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Micro_post_Social = {
  __typename?: 'Micro_post_Social';
  x?: Maybe<Micro_post_Social_X>;
};

export type Micro_post_Social_X = {
  __typename?: 'Micro_post_Social_X';
  autoPost?: Maybe<Scalars['Boolean']['output']>;
  autoPosted?: Maybe<Scalars['Boolean']['output']>;
  autoPostedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum Micro_post__status {
  Draft = 'draft',
  Published = 'published'
}

export enum Micro_post__status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Micro_post__status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Micro_post__status_operator = {
  all?: InputMaybe<Array<InputMaybe<Micro_post__status_Input>>>;
  equals?: InputMaybe<Micro_post__status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Micro_post__status_Input>>>;
  not_equals?: InputMaybe<Micro_post__status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Micro_post__status_Input>>>;
};

export type Micro_post_attachment_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Micro_post_authorSlug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Micro_post_authors_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Micro_post_content_operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Micro_post_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Micro_post_cronTranslationLocalesQueued {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export enum Micro_post_cronTranslationLocalesQueued_Input {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export enum Micro_post_cronTranslationLocalesQueued_MutationInput {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export type Micro_post_cronTranslationLocalesQueued_operator = {
  all?: InputMaybe<Array<InputMaybe<Micro_post_cronTranslationLocalesQueued_Input>>>;
  equals?: InputMaybe<Micro_post_cronTranslationLocalesQueued_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Micro_post_cronTranslationLocalesQueued_Input>>>;
  not_equals?: InputMaybe<Micro_post_cronTranslationLocalesQueued_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Micro_post_cronTranslationLocalesQueued_Input>>>;
};

export type Micro_post_externalLinks_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Micro_post_external_link = {
  __typename?: 'Micro_post_external_link';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  target_url: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Micro_post_external_link_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Micro_post_external_link_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Micro_post_external_link_target_url_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Micro_post_external_link_title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Micro_post_external_link_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Micro_post_external_link_where = {
  AND?: InputMaybe<Array<InputMaybe<Micro_post_external_link_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Micro_post_external_link_where_or>>>;
  createdAt?: InputMaybe<Micro_post_external_link_createdAt_operator>;
  id?: InputMaybe<Micro_post_external_link_id_operator>;
  target_url?: InputMaybe<Micro_post_external_link_target_url_operator>;
  title?: InputMaybe<Micro_post_external_link_title_operator>;
  updatedAt?: InputMaybe<Micro_post_external_link_updatedAt_operator>;
};

export type Micro_post_external_link_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Micro_post_external_link_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Micro_post_external_link_where_or>>>;
  createdAt?: InputMaybe<Micro_post_external_link_createdAt_operator>;
  id?: InputMaybe<Micro_post_external_link_id_operator>;
  target_url?: InputMaybe<Micro_post_external_link_target_url_operator>;
  title?: InputMaybe<Micro_post_external_link_title_operator>;
  updatedAt?: InputMaybe<Micro_post_external_link_updatedAt_operator>;
};

export type Micro_post_external_link_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Micro_post_external_link_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Micro_post_external_link_where_or>>>;
  createdAt?: InputMaybe<Micro_post_external_link_createdAt_operator>;
  id?: InputMaybe<Micro_post_external_link_id_operator>;
  target_url?: InputMaybe<Micro_post_external_link_target_url_operator>;
  title?: InputMaybe<Micro_post_external_link_title_operator>;
  updatedAt?: InputMaybe<Micro_post_external_link_updatedAt_operator>;
};

export type Micro_post_external_links = {
  __typename?: 'Micro_post_external_links';
  docs: Array<Micro_post_external_link>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Micro_post_external_linksCreateAccess = {
  __typename?: 'Micro_post_external_linksCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_post_external_linksCreateDocAccess = {
  __typename?: 'Micro_post_external_linksCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_post_external_linksDeleteAccess = {
  __typename?: 'Micro_post_external_linksDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_post_external_linksDeleteDocAccess = {
  __typename?: 'Micro_post_external_linksDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_post_external_linksDocAccessFields = {
  __typename?: 'Micro_post_external_linksDocAccessFields';
  createdAt?: Maybe<Micro_post_external_linksDocAccessFields_createdAt>;
  target_url?: Maybe<Micro_post_external_linksDocAccessFields_target_url>;
  title?: Maybe<Micro_post_external_linksDocAccessFields_title>;
  updatedAt?: Maybe<Micro_post_external_linksDocAccessFields_updatedAt>;
};

export type Micro_post_external_linksDocAccessFields_createdAt = {
  __typename?: 'Micro_post_external_linksDocAccessFields_createdAt';
  create?: Maybe<Micro_post_external_linksDocAccessFields_createdAt_Create>;
  delete?: Maybe<Micro_post_external_linksDocAccessFields_createdAt_Delete>;
  read?: Maybe<Micro_post_external_linksDocAccessFields_createdAt_Read>;
  update?: Maybe<Micro_post_external_linksDocAccessFields_createdAt_Update>;
};

export type Micro_post_external_linksDocAccessFields_createdAt_Create = {
  __typename?: 'Micro_post_external_linksDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_createdAt_Delete = {
  __typename?: 'Micro_post_external_linksDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_createdAt_Read = {
  __typename?: 'Micro_post_external_linksDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_createdAt_Update = {
  __typename?: 'Micro_post_external_linksDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_target_url = {
  __typename?: 'Micro_post_external_linksDocAccessFields_target_url';
  create?: Maybe<Micro_post_external_linksDocAccessFields_target_url_Create>;
  delete?: Maybe<Micro_post_external_linksDocAccessFields_target_url_Delete>;
  read?: Maybe<Micro_post_external_linksDocAccessFields_target_url_Read>;
  update?: Maybe<Micro_post_external_linksDocAccessFields_target_url_Update>;
};

export type Micro_post_external_linksDocAccessFields_target_url_Create = {
  __typename?: 'Micro_post_external_linksDocAccessFields_target_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_target_url_Delete = {
  __typename?: 'Micro_post_external_linksDocAccessFields_target_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_target_url_Read = {
  __typename?: 'Micro_post_external_linksDocAccessFields_target_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_target_url_Update = {
  __typename?: 'Micro_post_external_linksDocAccessFields_target_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_title = {
  __typename?: 'Micro_post_external_linksDocAccessFields_title';
  create?: Maybe<Micro_post_external_linksDocAccessFields_title_Create>;
  delete?: Maybe<Micro_post_external_linksDocAccessFields_title_Delete>;
  read?: Maybe<Micro_post_external_linksDocAccessFields_title_Read>;
  update?: Maybe<Micro_post_external_linksDocAccessFields_title_Update>;
};

export type Micro_post_external_linksDocAccessFields_title_Create = {
  __typename?: 'Micro_post_external_linksDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_title_Delete = {
  __typename?: 'Micro_post_external_linksDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_title_Read = {
  __typename?: 'Micro_post_external_linksDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_title_Update = {
  __typename?: 'Micro_post_external_linksDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_updatedAt = {
  __typename?: 'Micro_post_external_linksDocAccessFields_updatedAt';
  create?: Maybe<Micro_post_external_linksDocAccessFields_updatedAt_Create>;
  delete?: Maybe<Micro_post_external_linksDocAccessFields_updatedAt_Delete>;
  read?: Maybe<Micro_post_external_linksDocAccessFields_updatedAt_Read>;
  update?: Maybe<Micro_post_external_linksDocAccessFields_updatedAt_Update>;
};

export type Micro_post_external_linksDocAccessFields_updatedAt_Create = {
  __typename?: 'Micro_post_external_linksDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_updatedAt_Delete = {
  __typename?: 'Micro_post_external_linksDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_updatedAt_Read = {
  __typename?: 'Micro_post_external_linksDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksDocAccessFields_updatedAt_Update = {
  __typename?: 'Micro_post_external_linksDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields = {
  __typename?: 'Micro_post_external_linksFields';
  createdAt?: Maybe<Micro_post_external_linksFields_createdAt>;
  target_url?: Maybe<Micro_post_external_linksFields_target_url>;
  title?: Maybe<Micro_post_external_linksFields_title>;
  updatedAt?: Maybe<Micro_post_external_linksFields_updatedAt>;
};

export type Micro_post_external_linksFields_createdAt = {
  __typename?: 'Micro_post_external_linksFields_createdAt';
  create?: Maybe<Micro_post_external_linksFields_createdAt_Create>;
  delete?: Maybe<Micro_post_external_linksFields_createdAt_Delete>;
  read?: Maybe<Micro_post_external_linksFields_createdAt_Read>;
  update?: Maybe<Micro_post_external_linksFields_createdAt_Update>;
};

export type Micro_post_external_linksFields_createdAt_Create = {
  __typename?: 'Micro_post_external_linksFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_createdAt_Delete = {
  __typename?: 'Micro_post_external_linksFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_createdAt_Read = {
  __typename?: 'Micro_post_external_linksFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_createdAt_Update = {
  __typename?: 'Micro_post_external_linksFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_target_url = {
  __typename?: 'Micro_post_external_linksFields_target_url';
  create?: Maybe<Micro_post_external_linksFields_target_url_Create>;
  delete?: Maybe<Micro_post_external_linksFields_target_url_Delete>;
  read?: Maybe<Micro_post_external_linksFields_target_url_Read>;
  update?: Maybe<Micro_post_external_linksFields_target_url_Update>;
};

export type Micro_post_external_linksFields_target_url_Create = {
  __typename?: 'Micro_post_external_linksFields_target_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_target_url_Delete = {
  __typename?: 'Micro_post_external_linksFields_target_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_target_url_Read = {
  __typename?: 'Micro_post_external_linksFields_target_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_target_url_Update = {
  __typename?: 'Micro_post_external_linksFields_target_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_title = {
  __typename?: 'Micro_post_external_linksFields_title';
  create?: Maybe<Micro_post_external_linksFields_title_Create>;
  delete?: Maybe<Micro_post_external_linksFields_title_Delete>;
  read?: Maybe<Micro_post_external_linksFields_title_Read>;
  update?: Maybe<Micro_post_external_linksFields_title_Update>;
};

export type Micro_post_external_linksFields_title_Create = {
  __typename?: 'Micro_post_external_linksFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_title_Delete = {
  __typename?: 'Micro_post_external_linksFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_title_Read = {
  __typename?: 'Micro_post_external_linksFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_title_Update = {
  __typename?: 'Micro_post_external_linksFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_updatedAt = {
  __typename?: 'Micro_post_external_linksFields_updatedAt';
  create?: Maybe<Micro_post_external_linksFields_updatedAt_Create>;
  delete?: Maybe<Micro_post_external_linksFields_updatedAt_Delete>;
  read?: Maybe<Micro_post_external_linksFields_updatedAt_Read>;
  update?: Maybe<Micro_post_external_linksFields_updatedAt_Update>;
};

export type Micro_post_external_linksFields_updatedAt_Create = {
  __typename?: 'Micro_post_external_linksFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_updatedAt_Delete = {
  __typename?: 'Micro_post_external_linksFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_updatedAt_Read = {
  __typename?: 'Micro_post_external_linksFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksFields_updatedAt_Update = {
  __typename?: 'Micro_post_external_linksFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_post_external_linksReadAccess = {
  __typename?: 'Micro_post_external_linksReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_post_external_linksReadDocAccess = {
  __typename?: 'Micro_post_external_linksReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_post_external_linksUpdateAccess = {
  __typename?: 'Micro_post_external_linksUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_post_external_linksUpdateDocAccess = {
  __typename?: 'Micro_post_external_linksUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_post_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Micro_post_linkedMicroPosts_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Micro_post_meta__description_operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Micro_post_meta__image_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Micro_post_meta__title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Micro_post_post_type {
  Long = 'long',
  Short = 'short'
}

export enum Micro_post_post_type_Input {
  Long = 'long',
  Short = 'short'
}

export enum Micro_post_post_type_MutationInput {
  Long = 'long',
  Short = 'short'
}

export type Micro_post_post_type_operator = {
  all?: InputMaybe<Array<InputMaybe<Micro_post_post_type_Input>>>;
  equals?: InputMaybe<Micro_post_post_type_Input>;
  in?: InputMaybe<Array<InputMaybe<Micro_post_post_type_Input>>>;
  not_equals?: InputMaybe<Micro_post_post_type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Micro_post_post_type_Input>>>;
};

export type Micro_post_publishedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Micro_post_slug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Micro_post_social__x__autoPost_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Micro_post_social__x__autoPostedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Micro_post_social__x__autoPosted_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Micro_post_tags_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Micro_post_title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Micro_post_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Micro_post_where = {
  AND?: InputMaybe<Array<InputMaybe<Micro_post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Micro_post_where_or>>>;
  _status?: InputMaybe<Micro_post__status_operator>;
  attachment?: InputMaybe<Micro_post_attachment_operator>;
  authorSlug?: InputMaybe<Micro_post_authorSlug_operator>;
  authors?: InputMaybe<Micro_post_authors_operator>;
  content?: InputMaybe<Micro_post_content_operator>;
  createdAt?: InputMaybe<Micro_post_createdAt_operator>;
  cronTranslationLocalesQueued?: InputMaybe<Micro_post_cronTranslationLocalesQueued_operator>;
  externalLinks?: InputMaybe<Micro_post_externalLinks_operator>;
  id?: InputMaybe<Micro_post_id_operator>;
  linkedMicroPosts?: InputMaybe<Micro_post_linkedMicroPosts_operator>;
  meta__description?: InputMaybe<Micro_post_meta__description_operator>;
  meta__image?: InputMaybe<Micro_post_meta__image_operator>;
  meta__title?: InputMaybe<Micro_post_meta__title_operator>;
  post_type?: InputMaybe<Micro_post_post_type_operator>;
  publishedAt?: InputMaybe<Micro_post_publishedAt_operator>;
  slug?: InputMaybe<Micro_post_slug_operator>;
  social__x__autoPost?: InputMaybe<Micro_post_social__x__autoPost_operator>;
  social__x__autoPosted?: InputMaybe<Micro_post_social__x__autoPosted_operator>;
  social__x__autoPostedAt?: InputMaybe<Micro_post_social__x__autoPostedAt_operator>;
  tags?: InputMaybe<Micro_post_tags_operator>;
  title?: InputMaybe<Micro_post_title_operator>;
  updatedAt?: InputMaybe<Micro_post_updatedAt_operator>;
};

export type Micro_post_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Micro_post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Micro_post_where_or>>>;
  _status?: InputMaybe<Micro_post__status_operator>;
  attachment?: InputMaybe<Micro_post_attachment_operator>;
  authorSlug?: InputMaybe<Micro_post_authorSlug_operator>;
  authors?: InputMaybe<Micro_post_authors_operator>;
  content?: InputMaybe<Micro_post_content_operator>;
  createdAt?: InputMaybe<Micro_post_createdAt_operator>;
  cronTranslationLocalesQueued?: InputMaybe<Micro_post_cronTranslationLocalesQueued_operator>;
  externalLinks?: InputMaybe<Micro_post_externalLinks_operator>;
  id?: InputMaybe<Micro_post_id_operator>;
  linkedMicroPosts?: InputMaybe<Micro_post_linkedMicroPosts_operator>;
  meta__description?: InputMaybe<Micro_post_meta__description_operator>;
  meta__image?: InputMaybe<Micro_post_meta__image_operator>;
  meta__title?: InputMaybe<Micro_post_meta__title_operator>;
  post_type?: InputMaybe<Micro_post_post_type_operator>;
  publishedAt?: InputMaybe<Micro_post_publishedAt_operator>;
  slug?: InputMaybe<Micro_post_slug_operator>;
  social__x__autoPost?: InputMaybe<Micro_post_social__x__autoPost_operator>;
  social__x__autoPosted?: InputMaybe<Micro_post_social__x__autoPosted_operator>;
  social__x__autoPostedAt?: InputMaybe<Micro_post_social__x__autoPostedAt_operator>;
  tags?: InputMaybe<Micro_post_tags_operator>;
  title?: InputMaybe<Micro_post_title_operator>;
  updatedAt?: InputMaybe<Micro_post_updatedAt_operator>;
};

export type Micro_post_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Micro_post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Micro_post_where_or>>>;
  _status?: InputMaybe<Micro_post__status_operator>;
  attachment?: InputMaybe<Micro_post_attachment_operator>;
  authorSlug?: InputMaybe<Micro_post_authorSlug_operator>;
  authors?: InputMaybe<Micro_post_authors_operator>;
  content?: InputMaybe<Micro_post_content_operator>;
  createdAt?: InputMaybe<Micro_post_createdAt_operator>;
  cronTranslationLocalesQueued?: InputMaybe<Micro_post_cronTranslationLocalesQueued_operator>;
  externalLinks?: InputMaybe<Micro_post_externalLinks_operator>;
  id?: InputMaybe<Micro_post_id_operator>;
  linkedMicroPosts?: InputMaybe<Micro_post_linkedMicroPosts_operator>;
  meta__description?: InputMaybe<Micro_post_meta__description_operator>;
  meta__image?: InputMaybe<Micro_post_meta__image_operator>;
  meta__title?: InputMaybe<Micro_post_meta__title_operator>;
  post_type?: InputMaybe<Micro_post_post_type_operator>;
  publishedAt?: InputMaybe<Micro_post_publishedAt_operator>;
  slug?: InputMaybe<Micro_post_slug_operator>;
  social__x__autoPost?: InputMaybe<Micro_post_social__x__autoPost_operator>;
  social__x__autoPosted?: InputMaybe<Micro_post_social__x__autoPosted_operator>;
  social__x__autoPostedAt?: InputMaybe<Micro_post_social__x__autoPostedAt_operator>;
  tags?: InputMaybe<Micro_post_tags_operator>;
  title?: InputMaybe<Micro_post_title_operator>;
  updatedAt?: InputMaybe<Micro_post_updatedAt_operator>;
};

export type Micro_posts = {
  __typename?: 'Micro_posts';
  docs: Array<Micro_post>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Micro_postsCreateAccess = {
  __typename?: 'Micro_postsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_postsCreateDocAccess = {
  __typename?: 'Micro_postsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_postsDeleteAccess = {
  __typename?: 'Micro_postsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_postsDeleteDocAccess = {
  __typename?: 'Micro_postsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_postsDocAccessFields = {
  __typename?: 'Micro_postsDocAccessFields';
  _status?: Maybe<Micro_postsDocAccessFields__status>;
  attachment?: Maybe<Micro_postsDocAccessFields_attachment>;
  authorSlug?: Maybe<Micro_postsDocAccessFields_authorSlug>;
  authors?: Maybe<Micro_postsDocAccessFields_authors>;
  content?: Maybe<Micro_postsDocAccessFields_content>;
  createdAt?: Maybe<Micro_postsDocAccessFields_createdAt>;
  cronTranslationLocalesQueued?: Maybe<Micro_postsDocAccessFields_cronTranslationLocalesQueued>;
  externalLinks?: Maybe<Micro_postsDocAccessFields_externalLinks>;
  linkedMicroPosts?: Maybe<Micro_postsDocAccessFields_linkedMicroPosts>;
  meta?: Maybe<Micro_postsDocAccessFields_meta>;
  post_type?: Maybe<Micro_postsDocAccessFields_post_type>;
  publishedAt?: Maybe<Micro_postsDocAccessFields_publishedAt>;
  slug?: Maybe<Micro_postsDocAccessFields_slug>;
  social?: Maybe<Micro_postsDocAccessFields_social>;
  tags?: Maybe<Micro_postsDocAccessFields_tags>;
  title?: Maybe<Micro_postsDocAccessFields_title>;
  updatedAt?: Maybe<Micro_postsDocAccessFields_updatedAt>;
};

export type Micro_postsDocAccessFields__status = {
  __typename?: 'Micro_postsDocAccessFields__status';
  create?: Maybe<Micro_postsDocAccessFields__status_Create>;
  delete?: Maybe<Micro_postsDocAccessFields__status_Delete>;
  read?: Maybe<Micro_postsDocAccessFields__status_Read>;
  update?: Maybe<Micro_postsDocAccessFields__status_Update>;
};

export type Micro_postsDocAccessFields__status_Create = {
  __typename?: 'Micro_postsDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields__status_Delete = {
  __typename?: 'Micro_postsDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields__status_Read = {
  __typename?: 'Micro_postsDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields__status_Update = {
  __typename?: 'Micro_postsDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_attachment = {
  __typename?: 'Micro_postsDocAccessFields_attachment';
  create?: Maybe<Micro_postsDocAccessFields_attachment_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_attachment_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_attachment_Read>;
  update?: Maybe<Micro_postsDocAccessFields_attachment_Update>;
};

export type Micro_postsDocAccessFields_attachment_Create = {
  __typename?: 'Micro_postsDocAccessFields_attachment_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_attachment_Delete = {
  __typename?: 'Micro_postsDocAccessFields_attachment_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_attachment_Read = {
  __typename?: 'Micro_postsDocAccessFields_attachment_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_attachment_Update = {
  __typename?: 'Micro_postsDocAccessFields_attachment_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_authorSlug = {
  __typename?: 'Micro_postsDocAccessFields_authorSlug';
  create?: Maybe<Micro_postsDocAccessFields_authorSlug_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_authorSlug_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_authorSlug_Read>;
  update?: Maybe<Micro_postsDocAccessFields_authorSlug_Update>;
};

export type Micro_postsDocAccessFields_authorSlug_Create = {
  __typename?: 'Micro_postsDocAccessFields_authorSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_authorSlug_Delete = {
  __typename?: 'Micro_postsDocAccessFields_authorSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_authorSlug_Read = {
  __typename?: 'Micro_postsDocAccessFields_authorSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_authorSlug_Update = {
  __typename?: 'Micro_postsDocAccessFields_authorSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_authors = {
  __typename?: 'Micro_postsDocAccessFields_authors';
  create?: Maybe<Micro_postsDocAccessFields_authors_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_authors_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_authors_Read>;
  update?: Maybe<Micro_postsDocAccessFields_authors_Update>;
};

export type Micro_postsDocAccessFields_authors_Create = {
  __typename?: 'Micro_postsDocAccessFields_authors_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_authors_Delete = {
  __typename?: 'Micro_postsDocAccessFields_authors_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_authors_Read = {
  __typename?: 'Micro_postsDocAccessFields_authors_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_authors_Update = {
  __typename?: 'Micro_postsDocAccessFields_authors_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_content = {
  __typename?: 'Micro_postsDocAccessFields_content';
  create?: Maybe<Micro_postsDocAccessFields_content_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_content_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_content_Read>;
  update?: Maybe<Micro_postsDocAccessFields_content_Update>;
};

export type Micro_postsDocAccessFields_content_Create = {
  __typename?: 'Micro_postsDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_content_Delete = {
  __typename?: 'Micro_postsDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_content_Read = {
  __typename?: 'Micro_postsDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_content_Update = {
  __typename?: 'Micro_postsDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_createdAt = {
  __typename?: 'Micro_postsDocAccessFields_createdAt';
  create?: Maybe<Micro_postsDocAccessFields_createdAt_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_createdAt_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_createdAt_Read>;
  update?: Maybe<Micro_postsDocAccessFields_createdAt_Update>;
};

export type Micro_postsDocAccessFields_createdAt_Create = {
  __typename?: 'Micro_postsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_createdAt_Delete = {
  __typename?: 'Micro_postsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_createdAt_Read = {
  __typename?: 'Micro_postsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_createdAt_Update = {
  __typename?: 'Micro_postsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_cronTranslationLocalesQueued = {
  __typename?: 'Micro_postsDocAccessFields_cronTranslationLocalesQueued';
  create?: Maybe<Micro_postsDocAccessFields_cronTranslationLocalesQueued_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_cronTranslationLocalesQueued_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_cronTranslationLocalesQueued_Read>;
  update?: Maybe<Micro_postsDocAccessFields_cronTranslationLocalesQueued_Update>;
};

export type Micro_postsDocAccessFields_cronTranslationLocalesQueued_Create = {
  __typename?: 'Micro_postsDocAccessFields_cronTranslationLocalesQueued_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_cronTranslationLocalesQueued_Delete = {
  __typename?: 'Micro_postsDocAccessFields_cronTranslationLocalesQueued_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_cronTranslationLocalesQueued_Read = {
  __typename?: 'Micro_postsDocAccessFields_cronTranslationLocalesQueued_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_cronTranslationLocalesQueued_Update = {
  __typename?: 'Micro_postsDocAccessFields_cronTranslationLocalesQueued_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_externalLinks = {
  __typename?: 'Micro_postsDocAccessFields_externalLinks';
  create?: Maybe<Micro_postsDocAccessFields_externalLinks_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_externalLinks_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_externalLinks_Read>;
  update?: Maybe<Micro_postsDocAccessFields_externalLinks_Update>;
};

export type Micro_postsDocAccessFields_externalLinks_Create = {
  __typename?: 'Micro_postsDocAccessFields_externalLinks_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_externalLinks_Delete = {
  __typename?: 'Micro_postsDocAccessFields_externalLinks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_externalLinks_Read = {
  __typename?: 'Micro_postsDocAccessFields_externalLinks_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_externalLinks_Update = {
  __typename?: 'Micro_postsDocAccessFields_externalLinks_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_linkedMicroPosts = {
  __typename?: 'Micro_postsDocAccessFields_linkedMicroPosts';
  create?: Maybe<Micro_postsDocAccessFields_linkedMicroPosts_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_linkedMicroPosts_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_linkedMicroPosts_Read>;
  update?: Maybe<Micro_postsDocAccessFields_linkedMicroPosts_Update>;
};

export type Micro_postsDocAccessFields_linkedMicroPosts_Create = {
  __typename?: 'Micro_postsDocAccessFields_linkedMicroPosts_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_linkedMicroPosts_Delete = {
  __typename?: 'Micro_postsDocAccessFields_linkedMicroPosts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_linkedMicroPosts_Read = {
  __typename?: 'Micro_postsDocAccessFields_linkedMicroPosts_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_linkedMicroPosts_Update = {
  __typename?: 'Micro_postsDocAccessFields_linkedMicroPosts_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta = {
  __typename?: 'Micro_postsDocAccessFields_meta';
  description?: Maybe<Micro_postsDocAccessFields_meta_description>;
  image?: Maybe<Micro_postsDocAccessFields_meta_image>;
  title?: Maybe<Micro_postsDocAccessFields_meta_title>;
};

export type Micro_postsDocAccessFields_meta_description = {
  __typename?: 'Micro_postsDocAccessFields_meta_description';
  create?: Maybe<Micro_postsDocAccessFields_meta_description_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_meta_description_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_meta_description_Read>;
  update?: Maybe<Micro_postsDocAccessFields_meta_description_Update>;
};

export type Micro_postsDocAccessFields_meta_description_Create = {
  __typename?: 'Micro_postsDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_description_Delete = {
  __typename?: 'Micro_postsDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_description_Read = {
  __typename?: 'Micro_postsDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_description_Update = {
  __typename?: 'Micro_postsDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_image = {
  __typename?: 'Micro_postsDocAccessFields_meta_image';
  create?: Maybe<Micro_postsDocAccessFields_meta_image_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_meta_image_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_meta_image_Read>;
  update?: Maybe<Micro_postsDocAccessFields_meta_image_Update>;
};

export type Micro_postsDocAccessFields_meta_image_Create = {
  __typename?: 'Micro_postsDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_image_Delete = {
  __typename?: 'Micro_postsDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_image_Read = {
  __typename?: 'Micro_postsDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_image_Update = {
  __typename?: 'Micro_postsDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_title = {
  __typename?: 'Micro_postsDocAccessFields_meta_title';
  create?: Maybe<Micro_postsDocAccessFields_meta_title_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_meta_title_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_meta_title_Read>;
  update?: Maybe<Micro_postsDocAccessFields_meta_title_Update>;
};

export type Micro_postsDocAccessFields_meta_title_Create = {
  __typename?: 'Micro_postsDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_title_Delete = {
  __typename?: 'Micro_postsDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_title_Read = {
  __typename?: 'Micro_postsDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_meta_title_Update = {
  __typename?: 'Micro_postsDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_post_type = {
  __typename?: 'Micro_postsDocAccessFields_post_type';
  create?: Maybe<Micro_postsDocAccessFields_post_type_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_post_type_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_post_type_Read>;
  update?: Maybe<Micro_postsDocAccessFields_post_type_Update>;
};

export type Micro_postsDocAccessFields_post_type_Create = {
  __typename?: 'Micro_postsDocAccessFields_post_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_post_type_Delete = {
  __typename?: 'Micro_postsDocAccessFields_post_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_post_type_Read = {
  __typename?: 'Micro_postsDocAccessFields_post_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_post_type_Update = {
  __typename?: 'Micro_postsDocAccessFields_post_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_publishedAt = {
  __typename?: 'Micro_postsDocAccessFields_publishedAt';
  create?: Maybe<Micro_postsDocAccessFields_publishedAt_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_publishedAt_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_publishedAt_Read>;
  update?: Maybe<Micro_postsDocAccessFields_publishedAt_Update>;
};

export type Micro_postsDocAccessFields_publishedAt_Create = {
  __typename?: 'Micro_postsDocAccessFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_publishedAt_Delete = {
  __typename?: 'Micro_postsDocAccessFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_publishedAt_Read = {
  __typename?: 'Micro_postsDocAccessFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_publishedAt_Update = {
  __typename?: 'Micro_postsDocAccessFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_slug = {
  __typename?: 'Micro_postsDocAccessFields_slug';
  create?: Maybe<Micro_postsDocAccessFields_slug_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_slug_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_slug_Read>;
  update?: Maybe<Micro_postsDocAccessFields_slug_Update>;
};

export type Micro_postsDocAccessFields_slug_Create = {
  __typename?: 'Micro_postsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_slug_Delete = {
  __typename?: 'Micro_postsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_slug_Read = {
  __typename?: 'Micro_postsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_slug_Update = {
  __typename?: 'Micro_postsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social = {
  __typename?: 'Micro_postsDocAccessFields_social';
  create?: Maybe<Micro_postsDocAccessFields_social_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_social_Delete>;
  fields?: Maybe<Micro_postsDocAccessFields_social_Fields>;
  read?: Maybe<Micro_postsDocAccessFields_social_Read>;
  update?: Maybe<Micro_postsDocAccessFields_social_Update>;
};

export type Micro_postsDocAccessFields_social_Create = {
  __typename?: 'Micro_postsDocAccessFields_social_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_Delete = {
  __typename?: 'Micro_postsDocAccessFields_social_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_Fields = {
  __typename?: 'Micro_postsDocAccessFields_social_Fields';
  x?: Maybe<Micro_postsDocAccessFields_social_x>;
};

export type Micro_postsDocAccessFields_social_Read = {
  __typename?: 'Micro_postsDocAccessFields_social_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_Update = {
  __typename?: 'Micro_postsDocAccessFields_social_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x = {
  __typename?: 'Micro_postsDocAccessFields_social_x';
  create?: Maybe<Micro_postsDocAccessFields_social_x_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_social_x_Delete>;
  fields?: Maybe<Micro_postsDocAccessFields_social_x_Fields>;
  read?: Maybe<Micro_postsDocAccessFields_social_x_Read>;
  update?: Maybe<Micro_postsDocAccessFields_social_x_Update>;
};

export type Micro_postsDocAccessFields_social_x_Create = {
  __typename?: 'Micro_postsDocAccessFields_social_x_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_Delete = {
  __typename?: 'Micro_postsDocAccessFields_social_x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_Fields = {
  __typename?: 'Micro_postsDocAccessFields_social_x_Fields';
  autoPost?: Maybe<Micro_postsDocAccessFields_social_x_autoPost>;
  autoPosted?: Maybe<Micro_postsDocAccessFields_social_x_autoPosted>;
  autoPostedAt?: Maybe<Micro_postsDocAccessFields_social_x_autoPostedAt>;
};

export type Micro_postsDocAccessFields_social_x_Read = {
  __typename?: 'Micro_postsDocAccessFields_social_x_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_Update = {
  __typename?: 'Micro_postsDocAccessFields_social_x_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPost = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPost';
  create?: Maybe<Micro_postsDocAccessFields_social_x_autoPost_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_social_x_autoPost_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_social_x_autoPost_Read>;
  update?: Maybe<Micro_postsDocAccessFields_social_x_autoPost_Update>;
};

export type Micro_postsDocAccessFields_social_x_autoPost_Create = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPost_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPost_Delete = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPost_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPost_Read = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPost_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPost_Update = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPost_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPosted = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPosted';
  create?: Maybe<Micro_postsDocAccessFields_social_x_autoPosted_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_social_x_autoPosted_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_social_x_autoPosted_Read>;
  update?: Maybe<Micro_postsDocAccessFields_social_x_autoPosted_Update>;
};

export type Micro_postsDocAccessFields_social_x_autoPostedAt = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPostedAt';
  create?: Maybe<Micro_postsDocAccessFields_social_x_autoPostedAt_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_social_x_autoPostedAt_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_social_x_autoPostedAt_Read>;
  update?: Maybe<Micro_postsDocAccessFields_social_x_autoPostedAt_Update>;
};

export type Micro_postsDocAccessFields_social_x_autoPostedAt_Create = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPostedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPostedAt_Delete = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPostedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPostedAt_Read = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPostedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPostedAt_Update = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPostedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPosted_Create = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPosted_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPosted_Delete = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPosted_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPosted_Read = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPosted_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_social_x_autoPosted_Update = {
  __typename?: 'Micro_postsDocAccessFields_social_x_autoPosted_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_tags = {
  __typename?: 'Micro_postsDocAccessFields_tags';
  create?: Maybe<Micro_postsDocAccessFields_tags_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_tags_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_tags_Read>;
  update?: Maybe<Micro_postsDocAccessFields_tags_Update>;
};

export type Micro_postsDocAccessFields_tags_Create = {
  __typename?: 'Micro_postsDocAccessFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_tags_Delete = {
  __typename?: 'Micro_postsDocAccessFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_tags_Read = {
  __typename?: 'Micro_postsDocAccessFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_tags_Update = {
  __typename?: 'Micro_postsDocAccessFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_title = {
  __typename?: 'Micro_postsDocAccessFields_title';
  create?: Maybe<Micro_postsDocAccessFields_title_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_title_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_title_Read>;
  update?: Maybe<Micro_postsDocAccessFields_title_Update>;
};

export type Micro_postsDocAccessFields_title_Create = {
  __typename?: 'Micro_postsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_title_Delete = {
  __typename?: 'Micro_postsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_title_Read = {
  __typename?: 'Micro_postsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_title_Update = {
  __typename?: 'Micro_postsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_updatedAt = {
  __typename?: 'Micro_postsDocAccessFields_updatedAt';
  create?: Maybe<Micro_postsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<Micro_postsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<Micro_postsDocAccessFields_updatedAt_Read>;
  update?: Maybe<Micro_postsDocAccessFields_updatedAt_Update>;
};

export type Micro_postsDocAccessFields_updatedAt_Create = {
  __typename?: 'Micro_postsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_updatedAt_Delete = {
  __typename?: 'Micro_postsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_updatedAt_Read = {
  __typename?: 'Micro_postsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsDocAccessFields_updatedAt_Update = {
  __typename?: 'Micro_postsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields = {
  __typename?: 'Micro_postsFields';
  _status?: Maybe<Micro_postsFields__status>;
  attachment?: Maybe<Micro_postsFields_attachment>;
  authorSlug?: Maybe<Micro_postsFields_authorSlug>;
  authors?: Maybe<Micro_postsFields_authors>;
  content?: Maybe<Micro_postsFields_content>;
  createdAt?: Maybe<Micro_postsFields_createdAt>;
  cronTranslationLocalesQueued?: Maybe<Micro_postsFields_cronTranslationLocalesQueued>;
  externalLinks?: Maybe<Micro_postsFields_externalLinks>;
  linkedMicroPosts?: Maybe<Micro_postsFields_linkedMicroPosts>;
  meta?: Maybe<Micro_postsFields_meta>;
  post_type?: Maybe<Micro_postsFields_post_type>;
  publishedAt?: Maybe<Micro_postsFields_publishedAt>;
  slug?: Maybe<Micro_postsFields_slug>;
  social?: Maybe<Micro_postsFields_social>;
  tags?: Maybe<Micro_postsFields_tags>;
  title?: Maybe<Micro_postsFields_title>;
  updatedAt?: Maybe<Micro_postsFields_updatedAt>;
};

export type Micro_postsFields__status = {
  __typename?: 'Micro_postsFields__status';
  create?: Maybe<Micro_postsFields__status_Create>;
  delete?: Maybe<Micro_postsFields__status_Delete>;
  read?: Maybe<Micro_postsFields__status_Read>;
  update?: Maybe<Micro_postsFields__status_Update>;
};

export type Micro_postsFields__status_Create = {
  __typename?: 'Micro_postsFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields__status_Delete = {
  __typename?: 'Micro_postsFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields__status_Read = {
  __typename?: 'Micro_postsFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields__status_Update = {
  __typename?: 'Micro_postsFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_attachment = {
  __typename?: 'Micro_postsFields_attachment';
  create?: Maybe<Micro_postsFields_attachment_Create>;
  delete?: Maybe<Micro_postsFields_attachment_Delete>;
  read?: Maybe<Micro_postsFields_attachment_Read>;
  update?: Maybe<Micro_postsFields_attachment_Update>;
};

export type Micro_postsFields_attachment_Create = {
  __typename?: 'Micro_postsFields_attachment_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_attachment_Delete = {
  __typename?: 'Micro_postsFields_attachment_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_attachment_Read = {
  __typename?: 'Micro_postsFields_attachment_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_attachment_Update = {
  __typename?: 'Micro_postsFields_attachment_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_authorSlug = {
  __typename?: 'Micro_postsFields_authorSlug';
  create?: Maybe<Micro_postsFields_authorSlug_Create>;
  delete?: Maybe<Micro_postsFields_authorSlug_Delete>;
  read?: Maybe<Micro_postsFields_authorSlug_Read>;
  update?: Maybe<Micro_postsFields_authorSlug_Update>;
};

export type Micro_postsFields_authorSlug_Create = {
  __typename?: 'Micro_postsFields_authorSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_authorSlug_Delete = {
  __typename?: 'Micro_postsFields_authorSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_authorSlug_Read = {
  __typename?: 'Micro_postsFields_authorSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_authorSlug_Update = {
  __typename?: 'Micro_postsFields_authorSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_authors = {
  __typename?: 'Micro_postsFields_authors';
  create?: Maybe<Micro_postsFields_authors_Create>;
  delete?: Maybe<Micro_postsFields_authors_Delete>;
  read?: Maybe<Micro_postsFields_authors_Read>;
  update?: Maybe<Micro_postsFields_authors_Update>;
};

export type Micro_postsFields_authors_Create = {
  __typename?: 'Micro_postsFields_authors_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_authors_Delete = {
  __typename?: 'Micro_postsFields_authors_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_authors_Read = {
  __typename?: 'Micro_postsFields_authors_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_authors_Update = {
  __typename?: 'Micro_postsFields_authors_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_content = {
  __typename?: 'Micro_postsFields_content';
  create?: Maybe<Micro_postsFields_content_Create>;
  delete?: Maybe<Micro_postsFields_content_Delete>;
  read?: Maybe<Micro_postsFields_content_Read>;
  update?: Maybe<Micro_postsFields_content_Update>;
};

export type Micro_postsFields_content_Create = {
  __typename?: 'Micro_postsFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_content_Delete = {
  __typename?: 'Micro_postsFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_content_Read = {
  __typename?: 'Micro_postsFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_content_Update = {
  __typename?: 'Micro_postsFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_createdAt = {
  __typename?: 'Micro_postsFields_createdAt';
  create?: Maybe<Micro_postsFields_createdAt_Create>;
  delete?: Maybe<Micro_postsFields_createdAt_Delete>;
  read?: Maybe<Micro_postsFields_createdAt_Read>;
  update?: Maybe<Micro_postsFields_createdAt_Update>;
};

export type Micro_postsFields_createdAt_Create = {
  __typename?: 'Micro_postsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_createdAt_Delete = {
  __typename?: 'Micro_postsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_createdAt_Read = {
  __typename?: 'Micro_postsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_createdAt_Update = {
  __typename?: 'Micro_postsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_cronTranslationLocalesQueued = {
  __typename?: 'Micro_postsFields_cronTranslationLocalesQueued';
  create?: Maybe<Micro_postsFields_cronTranslationLocalesQueued_Create>;
  delete?: Maybe<Micro_postsFields_cronTranslationLocalesQueued_Delete>;
  read?: Maybe<Micro_postsFields_cronTranslationLocalesQueued_Read>;
  update?: Maybe<Micro_postsFields_cronTranslationLocalesQueued_Update>;
};

export type Micro_postsFields_cronTranslationLocalesQueued_Create = {
  __typename?: 'Micro_postsFields_cronTranslationLocalesQueued_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_cronTranslationLocalesQueued_Delete = {
  __typename?: 'Micro_postsFields_cronTranslationLocalesQueued_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_cronTranslationLocalesQueued_Read = {
  __typename?: 'Micro_postsFields_cronTranslationLocalesQueued_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_cronTranslationLocalesQueued_Update = {
  __typename?: 'Micro_postsFields_cronTranslationLocalesQueued_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_externalLinks = {
  __typename?: 'Micro_postsFields_externalLinks';
  create?: Maybe<Micro_postsFields_externalLinks_Create>;
  delete?: Maybe<Micro_postsFields_externalLinks_Delete>;
  read?: Maybe<Micro_postsFields_externalLinks_Read>;
  update?: Maybe<Micro_postsFields_externalLinks_Update>;
};

export type Micro_postsFields_externalLinks_Create = {
  __typename?: 'Micro_postsFields_externalLinks_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_externalLinks_Delete = {
  __typename?: 'Micro_postsFields_externalLinks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_externalLinks_Read = {
  __typename?: 'Micro_postsFields_externalLinks_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_externalLinks_Update = {
  __typename?: 'Micro_postsFields_externalLinks_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_linkedMicroPosts = {
  __typename?: 'Micro_postsFields_linkedMicroPosts';
  create?: Maybe<Micro_postsFields_linkedMicroPosts_Create>;
  delete?: Maybe<Micro_postsFields_linkedMicroPosts_Delete>;
  read?: Maybe<Micro_postsFields_linkedMicroPosts_Read>;
  update?: Maybe<Micro_postsFields_linkedMicroPosts_Update>;
};

export type Micro_postsFields_linkedMicroPosts_Create = {
  __typename?: 'Micro_postsFields_linkedMicroPosts_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_linkedMicroPosts_Delete = {
  __typename?: 'Micro_postsFields_linkedMicroPosts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_linkedMicroPosts_Read = {
  __typename?: 'Micro_postsFields_linkedMicroPosts_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_linkedMicroPosts_Update = {
  __typename?: 'Micro_postsFields_linkedMicroPosts_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta = {
  __typename?: 'Micro_postsFields_meta';
  description?: Maybe<Micro_postsFields_meta_description>;
  image?: Maybe<Micro_postsFields_meta_image>;
  title?: Maybe<Micro_postsFields_meta_title>;
};

export type Micro_postsFields_meta_description = {
  __typename?: 'Micro_postsFields_meta_description';
  create?: Maybe<Micro_postsFields_meta_description_Create>;
  delete?: Maybe<Micro_postsFields_meta_description_Delete>;
  read?: Maybe<Micro_postsFields_meta_description_Read>;
  update?: Maybe<Micro_postsFields_meta_description_Update>;
};

export type Micro_postsFields_meta_description_Create = {
  __typename?: 'Micro_postsFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_description_Delete = {
  __typename?: 'Micro_postsFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_description_Read = {
  __typename?: 'Micro_postsFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_description_Update = {
  __typename?: 'Micro_postsFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_image = {
  __typename?: 'Micro_postsFields_meta_image';
  create?: Maybe<Micro_postsFields_meta_image_Create>;
  delete?: Maybe<Micro_postsFields_meta_image_Delete>;
  read?: Maybe<Micro_postsFields_meta_image_Read>;
  update?: Maybe<Micro_postsFields_meta_image_Update>;
};

export type Micro_postsFields_meta_image_Create = {
  __typename?: 'Micro_postsFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_image_Delete = {
  __typename?: 'Micro_postsFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_image_Read = {
  __typename?: 'Micro_postsFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_image_Update = {
  __typename?: 'Micro_postsFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_title = {
  __typename?: 'Micro_postsFields_meta_title';
  create?: Maybe<Micro_postsFields_meta_title_Create>;
  delete?: Maybe<Micro_postsFields_meta_title_Delete>;
  read?: Maybe<Micro_postsFields_meta_title_Read>;
  update?: Maybe<Micro_postsFields_meta_title_Update>;
};

export type Micro_postsFields_meta_title_Create = {
  __typename?: 'Micro_postsFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_title_Delete = {
  __typename?: 'Micro_postsFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_title_Read = {
  __typename?: 'Micro_postsFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_meta_title_Update = {
  __typename?: 'Micro_postsFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_post_type = {
  __typename?: 'Micro_postsFields_post_type';
  create?: Maybe<Micro_postsFields_post_type_Create>;
  delete?: Maybe<Micro_postsFields_post_type_Delete>;
  read?: Maybe<Micro_postsFields_post_type_Read>;
  update?: Maybe<Micro_postsFields_post_type_Update>;
};

export type Micro_postsFields_post_type_Create = {
  __typename?: 'Micro_postsFields_post_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_post_type_Delete = {
  __typename?: 'Micro_postsFields_post_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_post_type_Read = {
  __typename?: 'Micro_postsFields_post_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_post_type_Update = {
  __typename?: 'Micro_postsFields_post_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_publishedAt = {
  __typename?: 'Micro_postsFields_publishedAt';
  create?: Maybe<Micro_postsFields_publishedAt_Create>;
  delete?: Maybe<Micro_postsFields_publishedAt_Delete>;
  read?: Maybe<Micro_postsFields_publishedAt_Read>;
  update?: Maybe<Micro_postsFields_publishedAt_Update>;
};

export type Micro_postsFields_publishedAt_Create = {
  __typename?: 'Micro_postsFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_publishedAt_Delete = {
  __typename?: 'Micro_postsFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_publishedAt_Read = {
  __typename?: 'Micro_postsFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_publishedAt_Update = {
  __typename?: 'Micro_postsFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_slug = {
  __typename?: 'Micro_postsFields_slug';
  create?: Maybe<Micro_postsFields_slug_Create>;
  delete?: Maybe<Micro_postsFields_slug_Delete>;
  read?: Maybe<Micro_postsFields_slug_Read>;
  update?: Maybe<Micro_postsFields_slug_Update>;
};

export type Micro_postsFields_slug_Create = {
  __typename?: 'Micro_postsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_slug_Delete = {
  __typename?: 'Micro_postsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_slug_Read = {
  __typename?: 'Micro_postsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_slug_Update = {
  __typename?: 'Micro_postsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social = {
  __typename?: 'Micro_postsFields_social';
  create?: Maybe<Micro_postsFields_social_Create>;
  delete?: Maybe<Micro_postsFields_social_Delete>;
  fields?: Maybe<Micro_postsFields_social_Fields>;
  read?: Maybe<Micro_postsFields_social_Read>;
  update?: Maybe<Micro_postsFields_social_Update>;
};

export type Micro_postsFields_social_Create = {
  __typename?: 'Micro_postsFields_social_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_Delete = {
  __typename?: 'Micro_postsFields_social_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_Fields = {
  __typename?: 'Micro_postsFields_social_Fields';
  x?: Maybe<Micro_postsFields_social_x>;
};

export type Micro_postsFields_social_Read = {
  __typename?: 'Micro_postsFields_social_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_Update = {
  __typename?: 'Micro_postsFields_social_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x = {
  __typename?: 'Micro_postsFields_social_x';
  create?: Maybe<Micro_postsFields_social_x_Create>;
  delete?: Maybe<Micro_postsFields_social_x_Delete>;
  fields?: Maybe<Micro_postsFields_social_x_Fields>;
  read?: Maybe<Micro_postsFields_social_x_Read>;
  update?: Maybe<Micro_postsFields_social_x_Update>;
};

export type Micro_postsFields_social_x_Create = {
  __typename?: 'Micro_postsFields_social_x_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_Delete = {
  __typename?: 'Micro_postsFields_social_x_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_Fields = {
  __typename?: 'Micro_postsFields_social_x_Fields';
  autoPost?: Maybe<Micro_postsFields_social_x_autoPost>;
  autoPosted?: Maybe<Micro_postsFields_social_x_autoPosted>;
  autoPostedAt?: Maybe<Micro_postsFields_social_x_autoPostedAt>;
};

export type Micro_postsFields_social_x_Read = {
  __typename?: 'Micro_postsFields_social_x_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_Update = {
  __typename?: 'Micro_postsFields_social_x_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPost = {
  __typename?: 'Micro_postsFields_social_x_autoPost';
  create?: Maybe<Micro_postsFields_social_x_autoPost_Create>;
  delete?: Maybe<Micro_postsFields_social_x_autoPost_Delete>;
  read?: Maybe<Micro_postsFields_social_x_autoPost_Read>;
  update?: Maybe<Micro_postsFields_social_x_autoPost_Update>;
};

export type Micro_postsFields_social_x_autoPost_Create = {
  __typename?: 'Micro_postsFields_social_x_autoPost_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPost_Delete = {
  __typename?: 'Micro_postsFields_social_x_autoPost_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPost_Read = {
  __typename?: 'Micro_postsFields_social_x_autoPost_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPost_Update = {
  __typename?: 'Micro_postsFields_social_x_autoPost_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPosted = {
  __typename?: 'Micro_postsFields_social_x_autoPosted';
  create?: Maybe<Micro_postsFields_social_x_autoPosted_Create>;
  delete?: Maybe<Micro_postsFields_social_x_autoPosted_Delete>;
  read?: Maybe<Micro_postsFields_social_x_autoPosted_Read>;
  update?: Maybe<Micro_postsFields_social_x_autoPosted_Update>;
};

export type Micro_postsFields_social_x_autoPostedAt = {
  __typename?: 'Micro_postsFields_social_x_autoPostedAt';
  create?: Maybe<Micro_postsFields_social_x_autoPostedAt_Create>;
  delete?: Maybe<Micro_postsFields_social_x_autoPostedAt_Delete>;
  read?: Maybe<Micro_postsFields_social_x_autoPostedAt_Read>;
  update?: Maybe<Micro_postsFields_social_x_autoPostedAt_Update>;
};

export type Micro_postsFields_social_x_autoPostedAt_Create = {
  __typename?: 'Micro_postsFields_social_x_autoPostedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPostedAt_Delete = {
  __typename?: 'Micro_postsFields_social_x_autoPostedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPostedAt_Read = {
  __typename?: 'Micro_postsFields_social_x_autoPostedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPostedAt_Update = {
  __typename?: 'Micro_postsFields_social_x_autoPostedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPosted_Create = {
  __typename?: 'Micro_postsFields_social_x_autoPosted_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPosted_Delete = {
  __typename?: 'Micro_postsFields_social_x_autoPosted_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPosted_Read = {
  __typename?: 'Micro_postsFields_social_x_autoPosted_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_social_x_autoPosted_Update = {
  __typename?: 'Micro_postsFields_social_x_autoPosted_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_tags = {
  __typename?: 'Micro_postsFields_tags';
  create?: Maybe<Micro_postsFields_tags_Create>;
  delete?: Maybe<Micro_postsFields_tags_Delete>;
  read?: Maybe<Micro_postsFields_tags_Read>;
  update?: Maybe<Micro_postsFields_tags_Update>;
};

export type Micro_postsFields_tags_Create = {
  __typename?: 'Micro_postsFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_tags_Delete = {
  __typename?: 'Micro_postsFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_tags_Read = {
  __typename?: 'Micro_postsFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_tags_Update = {
  __typename?: 'Micro_postsFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_title = {
  __typename?: 'Micro_postsFields_title';
  create?: Maybe<Micro_postsFields_title_Create>;
  delete?: Maybe<Micro_postsFields_title_Delete>;
  read?: Maybe<Micro_postsFields_title_Read>;
  update?: Maybe<Micro_postsFields_title_Update>;
};

export type Micro_postsFields_title_Create = {
  __typename?: 'Micro_postsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_title_Delete = {
  __typename?: 'Micro_postsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_title_Read = {
  __typename?: 'Micro_postsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_title_Update = {
  __typename?: 'Micro_postsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_updatedAt = {
  __typename?: 'Micro_postsFields_updatedAt';
  create?: Maybe<Micro_postsFields_updatedAt_Create>;
  delete?: Maybe<Micro_postsFields_updatedAt_Delete>;
  read?: Maybe<Micro_postsFields_updatedAt_Read>;
  update?: Maybe<Micro_postsFields_updatedAt_Update>;
};

export type Micro_postsFields_updatedAt_Create = {
  __typename?: 'Micro_postsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_updatedAt_Delete = {
  __typename?: 'Micro_postsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_updatedAt_Read = {
  __typename?: 'Micro_postsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsFields_updatedAt_Update = {
  __typename?: 'Micro_postsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type Micro_postsReadAccess = {
  __typename?: 'Micro_postsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_postsReadDocAccess = {
  __typename?: 'Micro_postsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_postsReadVersionsAccess = {
  __typename?: 'Micro_postsReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_postsReadVersionsDocAccess = {
  __typename?: 'Micro_postsReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_postsUpdateAccess = {
  __typename?: 'Micro_postsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Micro_postsUpdateDocAccess = {
  __typename?: 'Micro_postsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAi_call_log?: Maybe<Ai_call_log>;
  createAuthor?: Maybe<Author>;
  createMedia?: Maybe<Media>;
  createMicro_post?: Maybe<Micro_post>;
  createMicro_post_external_link?: Maybe<Micro_post_external_link>;
  createPayloadJob?: Maybe<PayloadJob>;
  createPayloadKv?: Maybe<PayloadKv>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createPayloadQueryPreset?: Maybe<PayloadQueryPreset>;
  createPost?: Maybe<Post>;
  createSearch?: Maybe<Search>;
  createTag?: Maybe<Tag>;
  createUser?: Maybe<User>;
  deleteAi_call_log?: Maybe<Ai_call_log>;
  deleteAuthor?: Maybe<Author>;
  deleteMedia?: Maybe<Media>;
  deleteMicro_post?: Maybe<Micro_post>;
  deleteMicro_post_external_link?: Maybe<Micro_post_external_link>;
  deletePayloadJob?: Maybe<PayloadJob>;
  deletePayloadKv?: Maybe<PayloadKv>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deletePayloadQueryPreset?: Maybe<PayloadQueryPreset>;
  deletePost?: Maybe<Post>;
  deleteSearch?: Maybe<Search>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  duplicateAi_call_log?: Maybe<Ai_call_log>;
  duplicateAuthor?: Maybe<Author>;
  duplicateMedia?: Maybe<Media>;
  duplicateMicro_post?: Maybe<Micro_post>;
  duplicateMicro_post_external_link?: Maybe<Micro_post_external_link>;
  duplicatePayloadJob?: Maybe<PayloadJob>;
  duplicatePayloadKv?: Maybe<PayloadKv>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicatePayloadQueryPreset?: Maybe<PayloadQueryPreset>;
  duplicatePost?: Maybe<Post>;
  duplicateSearch?: Maybe<Search>;
  duplicateTag?: Maybe<Tag>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<usersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<usersRefreshedUser>;
  resetPasswordUser?: Maybe<usersResetPassword>;
  restoreVersionMicro_post?: Maybe<Micro_post>;
  restoreVersionPost?: Maybe<Post>;
  unlockUser: Scalars['Boolean']['output'];
  updateAi_call_log?: Maybe<Ai_call_log>;
  updateAuthor?: Maybe<Author>;
  updateMedia?: Maybe<Media>;
  updateMicro_post?: Maybe<Micro_post>;
  updateMicro_post_external_link?: Maybe<Micro_post_external_link>;
  updatePayloadJob?: Maybe<PayloadJob>;
  updatePayloadKv?: Maybe<PayloadKv>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updatePayloadQueryPreset?: Maybe<PayloadQueryPreset>;
  updatePost?: Maybe<Post>;
  updateSearch?: Maybe<Search>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationcreateAi_call_logArgs = {
  data: mutationAi_call_logInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreateAuthorArgs = {
  data: mutationAuthorInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreateMediaArgs = {
  data: mutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreateMicro_postArgs = {
  data: mutationMicro_postInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreateMicro_post_external_linkArgs = {
  data: mutationMicro_post_external_linkInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreatePayloadJobArgs = {
  data: mutationPayloadJobInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreatePayloadKvArgs = {
  data: mutationPayloadKvInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreatePayloadLockedDocumentArgs = {
  data: mutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreatePayloadPreferenceArgs = {
  data: mutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreatePayloadQueryPresetArgs = {
  data: mutationPayloadQueryPresetInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreatePostArgs = {
  data: mutationPostInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreateSearchArgs = {
  data: mutationSearchInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreateTagArgs = {
  data: mutationTagInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationcreateUserArgs = {
  data: mutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationdeleteAi_call_logArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeleteAuthorArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeleteMediaArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeleteMicro_postArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeleteMicro_post_external_linkArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeletePayloadJobArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeletePayloadKvArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeletePayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeletePayloadQueryPresetArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeletePostArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeleteSearchArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeleteTagArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationdeleteUserArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationduplicateAi_call_logArgs = {
  data: mutationAi_call_logInput;
  id: Scalars['String']['input'];
};


export type MutationduplicateAuthorArgs = {
  data: mutationAuthorInput;
  id: Scalars['String']['input'];
};


export type MutationduplicateMediaArgs = {
  data: mutationMediaInput;
  id: Scalars['String']['input'];
};


export type MutationduplicateMicro_postArgs = {
  data: mutationMicro_postInput;
  id: Scalars['String']['input'];
};


export type MutationduplicateMicro_post_external_linkArgs = {
  data: mutationMicro_post_external_linkInput;
  id: Scalars['String']['input'];
};


export type MutationduplicatePayloadJobArgs = {
  data: mutationPayloadJobInput;
  id: Scalars['String']['input'];
};


export type MutationduplicatePayloadKvArgs = {
  data: mutationPayloadKvInput;
  id: Scalars['String']['input'];
};


export type MutationduplicatePayloadLockedDocumentArgs = {
  data: mutationPayloadLockedDocumentInput;
  id: Scalars['String']['input'];
};


export type MutationduplicatePayloadPreferenceArgs = {
  data: mutationPayloadPreferenceInput;
  id: Scalars['String']['input'];
};


export type MutationduplicatePayloadQueryPresetArgs = {
  data: mutationPayloadQueryPresetInput;
  id: Scalars['String']['input'];
};


export type MutationduplicatePostArgs = {
  data: mutationPostInput;
  id: Scalars['String']['input'];
};


export type MutationduplicateSearchArgs = {
  data: mutationSearchInput;
  id: Scalars['String']['input'];
};


export type MutationduplicateTagArgs = {
  data: mutationTagInput;
  id: Scalars['String']['input'];
};


export type MutationforgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationloginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationlogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationresetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationrestoreVersionMicro_postArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationrestoreVersionPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationunlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationupdateAi_call_logArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationAi_call_logUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdateAuthorArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationAuthorUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdateMicro_postArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationMicro_postUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdateMicro_post_external_linkArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationMicro_post_external_linkUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdatePayloadJobArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPayloadJobUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdatePayloadKvArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPayloadKvUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdatePayloadQueryPresetArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPayloadQueryPresetUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdatePostArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationPostUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdateSearchArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationSearchUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdateTagArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationTagUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationupdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: mutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationverifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadJob = {
  __typename?: 'PayloadJob';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  error?: Maybe<Scalars['JSON']['output']>;
  hasError?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  input?: Maybe<Scalars['JSON']['output']>;
  log?: Maybe<Array<PayloadJob_Log>>;
  processing?: Maybe<Scalars['Boolean']['output']>;
  queue?: Maybe<Scalars['String']['output']>;
  taskSlug?: Maybe<PayloadJob_taskSlug>;
  taskStatus?: Maybe<Scalars['JSON']['output']>;
  totalTried?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  waitUntil?: Maybe<Scalars['DateTime']['output']>;
};

export enum PayloadJobUpdate_Log_Parent_taskSlug_MutationInput {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export enum PayloadJobUpdate_Log_taskSlug_MutationInput {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export enum PayloadJobUpdate_taskSlug_MutationInput {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export type PayloadJob_Log = {
  __typename?: 'PayloadJob_Log';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  error?: Maybe<Scalars['JSON']['output']>;
  executedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  input?: Maybe<Scalars['JSON']['output']>;
  output?: Maybe<Scalars['JSON']['output']>;
  parent?: Maybe<PayloadJob_Log_Parent>;
  state?: Maybe<PayloadJob_Log_state>;
  taskID?: Maybe<Scalars['String']['output']>;
  taskSlug?: Maybe<PayloadJob_Log_taskSlug>;
};

export type PayloadJob_Log_Parent = {
  __typename?: 'PayloadJob_Log_Parent';
  taskID?: Maybe<Scalars['String']['output']>;
  taskSlug?: Maybe<PayloadJob_Log_Parent_taskSlug>;
};

export enum PayloadJob_Log_Parent_taskSlug {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export enum PayloadJob_Log_Parent_taskSlug_MutationInput {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export enum PayloadJob_Log_state {
  Failed = 'failed',
  Succeeded = 'succeeded'
}

export enum PayloadJob_Log_taskSlug {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export enum PayloadJob_Log_taskSlug_MutationInput {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export type PayloadJob_completedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadJob_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadJob_error_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadJob_hasError_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadJob_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadJob_input_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadJob_log__completedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadJob_log__error_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadJob_log__executedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadJob_log__id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadJob_log__input_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadJob_log__output_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadJob_log__parent__taskID_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum PayloadJob_log__parent__taskSlug_Input {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export type PayloadJob_log__parent__taskSlug_operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadJob_log__parent__taskSlug_Input>>>;
  equals?: InputMaybe<PayloadJob_log__parent__taskSlug_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<PayloadJob_log__parent__taskSlug_Input>>>;
  not_equals?: InputMaybe<PayloadJob_log__parent__taskSlug_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PayloadJob_log__parent__taskSlug_Input>>>;
};

export enum PayloadJob_log__state_Input {
  Failed = 'failed',
  Succeeded = 'succeeded'
}

export type PayloadJob_log__state_operator = {
  contains?: InputMaybe<PayloadJob_log__state_Input>;
  equals?: InputMaybe<PayloadJob_log__state_Input>;
  like?: InputMaybe<PayloadJob_log__state_Input>;
  not_equals?: InputMaybe<PayloadJob_log__state_Input>;
};

export type PayloadJob_log__taskID_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum PayloadJob_log__taskSlug_Input {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export type PayloadJob_log__taskSlug_operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadJob_log__taskSlug_Input>>>;
  equals?: InputMaybe<PayloadJob_log__taskSlug_Input>;
  in?: InputMaybe<Array<InputMaybe<PayloadJob_log__taskSlug_Input>>>;
  not_equals?: InputMaybe<PayloadJob_log__taskSlug_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PayloadJob_log__taskSlug_Input>>>;
};

export type PayloadJob_processing_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadJob_queue_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum PayloadJob_taskSlug {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export enum PayloadJob_taskSlug_Input {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export enum PayloadJob_taskSlug_MutationInput {
  Inline = 'inline',
  TranslateDocument = 'translateDocument'
}

export type PayloadJob_taskSlug_operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadJob_taskSlug_Input>>>;
  equals?: InputMaybe<PayloadJob_taskSlug_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<PayloadJob_taskSlug_Input>>>;
  not_equals?: InputMaybe<PayloadJob_taskSlug_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PayloadJob_taskSlug_Input>>>;
};

export type PayloadJob_taskStatus_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadJob_totalTried_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PayloadJob_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadJob_waitUntil_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadJob_where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadJob_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadJob_where_or>>>;
  completedAt?: InputMaybe<PayloadJob_completedAt_operator>;
  createdAt?: InputMaybe<PayloadJob_createdAt_operator>;
  error?: InputMaybe<PayloadJob_error_operator>;
  hasError?: InputMaybe<PayloadJob_hasError_operator>;
  id?: InputMaybe<PayloadJob_id_operator>;
  input?: InputMaybe<PayloadJob_input_operator>;
  log__completedAt?: InputMaybe<PayloadJob_log__completedAt_operator>;
  log__error?: InputMaybe<PayloadJob_log__error_operator>;
  log__executedAt?: InputMaybe<PayloadJob_log__executedAt_operator>;
  log__id?: InputMaybe<PayloadJob_log__id_operator>;
  log__input?: InputMaybe<PayloadJob_log__input_operator>;
  log__output?: InputMaybe<PayloadJob_log__output_operator>;
  log__parent__taskID?: InputMaybe<PayloadJob_log__parent__taskID_operator>;
  log__parent__taskSlug?: InputMaybe<PayloadJob_log__parent__taskSlug_operator>;
  log__state?: InputMaybe<PayloadJob_log__state_operator>;
  log__taskID?: InputMaybe<PayloadJob_log__taskID_operator>;
  log__taskSlug?: InputMaybe<PayloadJob_log__taskSlug_operator>;
  processing?: InputMaybe<PayloadJob_processing_operator>;
  queue?: InputMaybe<PayloadJob_queue_operator>;
  taskSlug?: InputMaybe<PayloadJob_taskSlug_operator>;
  taskStatus?: InputMaybe<PayloadJob_taskStatus_operator>;
  totalTried?: InputMaybe<PayloadJob_totalTried_operator>;
  updatedAt?: InputMaybe<PayloadJob_updatedAt_operator>;
  waitUntil?: InputMaybe<PayloadJob_waitUntil_operator>;
};

export type PayloadJob_where_and = {
  AND?: InputMaybe<Array<InputMaybe<PayloadJob_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadJob_where_or>>>;
  completedAt?: InputMaybe<PayloadJob_completedAt_operator>;
  createdAt?: InputMaybe<PayloadJob_createdAt_operator>;
  error?: InputMaybe<PayloadJob_error_operator>;
  hasError?: InputMaybe<PayloadJob_hasError_operator>;
  id?: InputMaybe<PayloadJob_id_operator>;
  input?: InputMaybe<PayloadJob_input_operator>;
  log__completedAt?: InputMaybe<PayloadJob_log__completedAt_operator>;
  log__error?: InputMaybe<PayloadJob_log__error_operator>;
  log__executedAt?: InputMaybe<PayloadJob_log__executedAt_operator>;
  log__id?: InputMaybe<PayloadJob_log__id_operator>;
  log__input?: InputMaybe<PayloadJob_log__input_operator>;
  log__output?: InputMaybe<PayloadJob_log__output_operator>;
  log__parent__taskID?: InputMaybe<PayloadJob_log__parent__taskID_operator>;
  log__parent__taskSlug?: InputMaybe<PayloadJob_log__parent__taskSlug_operator>;
  log__state?: InputMaybe<PayloadJob_log__state_operator>;
  log__taskID?: InputMaybe<PayloadJob_log__taskID_operator>;
  log__taskSlug?: InputMaybe<PayloadJob_log__taskSlug_operator>;
  processing?: InputMaybe<PayloadJob_processing_operator>;
  queue?: InputMaybe<PayloadJob_queue_operator>;
  taskSlug?: InputMaybe<PayloadJob_taskSlug_operator>;
  taskStatus?: InputMaybe<PayloadJob_taskStatus_operator>;
  totalTried?: InputMaybe<PayloadJob_totalTried_operator>;
  updatedAt?: InputMaybe<PayloadJob_updatedAt_operator>;
  waitUntil?: InputMaybe<PayloadJob_waitUntil_operator>;
};

export type PayloadJob_where_or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadJob_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadJob_where_or>>>;
  completedAt?: InputMaybe<PayloadJob_completedAt_operator>;
  createdAt?: InputMaybe<PayloadJob_createdAt_operator>;
  error?: InputMaybe<PayloadJob_error_operator>;
  hasError?: InputMaybe<PayloadJob_hasError_operator>;
  id?: InputMaybe<PayloadJob_id_operator>;
  input?: InputMaybe<PayloadJob_input_operator>;
  log__completedAt?: InputMaybe<PayloadJob_log__completedAt_operator>;
  log__error?: InputMaybe<PayloadJob_log__error_operator>;
  log__executedAt?: InputMaybe<PayloadJob_log__executedAt_operator>;
  log__id?: InputMaybe<PayloadJob_log__id_operator>;
  log__input?: InputMaybe<PayloadJob_log__input_operator>;
  log__output?: InputMaybe<PayloadJob_log__output_operator>;
  log__parent__taskID?: InputMaybe<PayloadJob_log__parent__taskID_operator>;
  log__parent__taskSlug?: InputMaybe<PayloadJob_log__parent__taskSlug_operator>;
  log__state?: InputMaybe<PayloadJob_log__state_operator>;
  log__taskID?: InputMaybe<PayloadJob_log__taskID_operator>;
  log__taskSlug?: InputMaybe<PayloadJob_log__taskSlug_operator>;
  processing?: InputMaybe<PayloadJob_processing_operator>;
  queue?: InputMaybe<PayloadJob_queue_operator>;
  taskSlug?: InputMaybe<PayloadJob_taskSlug_operator>;
  taskStatus?: InputMaybe<PayloadJob_taskStatus_operator>;
  totalTried?: InputMaybe<PayloadJob_totalTried_operator>;
  updatedAt?: InputMaybe<PayloadJob_updatedAt_operator>;
  waitUntil?: InputMaybe<PayloadJob_waitUntil_operator>;
};

export type PayloadJobs = {
  __typename?: 'PayloadJobs';
  docs: Array<PayloadJob>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadJobsCreateAccess = {
  __typename?: 'PayloadJobsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadJobsCreateDocAccess = {
  __typename?: 'PayloadJobsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadJobsDeleteAccess = {
  __typename?: 'PayloadJobsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadJobsDeleteDocAccess = {
  __typename?: 'PayloadJobsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadJobsDocAccessFields = {
  __typename?: 'PayloadJobsDocAccessFields';
  completedAt?: Maybe<PayloadJobsDocAccessFields_completedAt>;
  createdAt?: Maybe<PayloadJobsDocAccessFields_createdAt>;
  error?: Maybe<PayloadJobsDocAccessFields_error>;
  hasError?: Maybe<PayloadJobsDocAccessFields_hasError>;
  input?: Maybe<PayloadJobsDocAccessFields_input>;
  log?: Maybe<PayloadJobsDocAccessFields_log>;
  processing?: Maybe<PayloadJobsDocAccessFields_processing>;
  queue?: Maybe<PayloadJobsDocAccessFields_queue>;
  taskSlug?: Maybe<PayloadJobsDocAccessFields_taskSlug>;
  taskStatus?: Maybe<PayloadJobsDocAccessFields_taskStatus>;
  totalTried?: Maybe<PayloadJobsDocAccessFields_totalTried>;
  updatedAt?: Maybe<PayloadJobsDocAccessFields_updatedAt>;
  waitUntil?: Maybe<PayloadJobsDocAccessFields_waitUntil>;
};

export type PayloadJobsDocAccessFields_completedAt = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt';
  create?: Maybe<PayloadJobsDocAccessFields_completedAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_completedAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_completedAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_completedAt_Update>;
};

export type PayloadJobsDocAccessFields_completedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_completedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_completedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_completedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_createdAt = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt';
  create?: Maybe<PayloadJobsDocAccessFields_createdAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_createdAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_createdAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_createdAt_Update>;
};

export type PayloadJobsDocAccessFields_createdAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_createdAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_createdAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_createdAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_error = {
  __typename?: 'PayloadJobsDocAccessFields_error';
  create?: Maybe<PayloadJobsDocAccessFields_error_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_error_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_error_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_error_Update>;
};

export type PayloadJobsDocAccessFields_error_Create = {
  __typename?: 'PayloadJobsDocAccessFields_error_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_error_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_error_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_error_Read = {
  __typename?: 'PayloadJobsDocAccessFields_error_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_error_Update = {
  __typename?: 'PayloadJobsDocAccessFields_error_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_hasError = {
  __typename?: 'PayloadJobsDocAccessFields_hasError';
  create?: Maybe<PayloadJobsDocAccessFields_hasError_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_hasError_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_hasError_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_hasError_Update>;
};

export type PayloadJobsDocAccessFields_hasError_Create = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_hasError_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_hasError_Read = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_hasError_Update = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_input = {
  __typename?: 'PayloadJobsDocAccessFields_input';
  create?: Maybe<PayloadJobsDocAccessFields_input_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_input_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_input_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_input_Update>;
};

export type PayloadJobsDocAccessFields_input_Create = {
  __typename?: 'PayloadJobsDocAccessFields_input_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_input_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_input_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_input_Read = {
  __typename?: 'PayloadJobsDocAccessFields_input_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_input_Update = {
  __typename?: 'PayloadJobsDocAccessFields_input_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log = {
  __typename?: 'PayloadJobsDocAccessFields_log';
  create?: Maybe<PayloadJobsDocAccessFields_log_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_Delete>;
  fields?: Maybe<PayloadJobsDocAccessFields_log_Fields>;
  read?: Maybe<PayloadJobsDocAccessFields_log_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_Update>;
};

export type PayloadJobsDocAccessFields_log_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_Fields = {
  __typename?: 'PayloadJobsDocAccessFields_log_Fields';
  completedAt?: Maybe<PayloadJobsDocAccessFields_log_completedAt>;
  error?: Maybe<PayloadJobsDocAccessFields_log_error>;
  executedAt?: Maybe<PayloadJobsDocAccessFields_log_executedAt>;
  id?: Maybe<PayloadJobsDocAccessFields_log_id>;
  input?: Maybe<PayloadJobsDocAccessFields_log_input>;
  output?: Maybe<PayloadJobsDocAccessFields_log_output>;
  parent?: Maybe<PayloadJobsDocAccessFields_log_parent>;
  state?: Maybe<PayloadJobsDocAccessFields_log_state>;
  taskID?: Maybe<PayloadJobsDocAccessFields_log_taskID>;
  taskSlug?: Maybe<PayloadJobsDocAccessFields_log_taskSlug>;
};

export type PayloadJobsDocAccessFields_log_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_completedAt = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt';
  create?: Maybe<PayloadJobsDocAccessFields_log_completedAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_completedAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_completedAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_completedAt_Update>;
};

export type PayloadJobsDocAccessFields_log_completedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_completedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_completedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_completedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_error = {
  __typename?: 'PayloadJobsDocAccessFields_log_error';
  create?: Maybe<PayloadJobsDocAccessFields_log_error_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_error_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_error_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_error_Update>;
};

export type PayloadJobsDocAccessFields_log_error_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_error_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_error_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_error_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_executedAt = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt';
  create?: Maybe<PayloadJobsDocAccessFields_log_executedAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_executedAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_executedAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_executedAt_Update>;
};

export type PayloadJobsDocAccessFields_log_executedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_executedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_executedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_executedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_id = {
  __typename?: 'PayloadJobsDocAccessFields_log_id';
  create?: Maybe<PayloadJobsDocAccessFields_log_id_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_id_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_id_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_id_Update>;
};

export type PayloadJobsDocAccessFields_log_id_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_id_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_id_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_id_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_input = {
  __typename?: 'PayloadJobsDocAccessFields_log_input';
  create?: Maybe<PayloadJobsDocAccessFields_log_input_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_input_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_input_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_input_Update>;
};

export type PayloadJobsDocAccessFields_log_input_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_input_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_input_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_input_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_output = {
  __typename?: 'PayloadJobsDocAccessFields_log_output';
  create?: Maybe<PayloadJobsDocAccessFields_log_output_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_output_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_output_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_output_Update>;
};

export type PayloadJobsDocAccessFields_log_output_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_output_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_output_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_output_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent';
  create?: Maybe<PayloadJobsDocAccessFields_log_parent_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_parent_Delete>;
  fields?: Maybe<PayloadJobsDocAccessFields_log_parent_Fields>;
  read?: Maybe<PayloadJobsDocAccessFields_log_parent_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_parent_Update>;
};

export type PayloadJobsDocAccessFields_log_parent_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_Fields = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_Fields';
  taskID?: Maybe<PayloadJobsDocAccessFields_log_parent_taskID>;
  taskSlug?: Maybe<PayloadJobsDocAccessFields_log_parent_taskSlug>;
};

export type PayloadJobsDocAccessFields_log_parent_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_taskID = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskID';
  create?: Maybe<PayloadJobsDocAccessFields_log_parent_taskID_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_parent_taskID_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_parent_taskID_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_parent_taskID_Update>;
};

export type PayloadJobsDocAccessFields_log_parent_taskID_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskID_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_taskID_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskID_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_taskID_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskID_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_taskID_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskID_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_taskSlug = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskSlug';
  create?: Maybe<PayloadJobsDocAccessFields_log_parent_taskSlug_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_parent_taskSlug_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_parent_taskSlug_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_parent_taskSlug_Update>;
};

export type PayloadJobsDocAccessFields_log_parent_taskSlug_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_taskSlug_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_taskSlug_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_parent_taskSlug_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_parent_taskSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_state = {
  __typename?: 'PayloadJobsDocAccessFields_log_state';
  create?: Maybe<PayloadJobsDocAccessFields_log_state_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_state_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_state_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_state_Update>;
};

export type PayloadJobsDocAccessFields_log_state_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_state_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_state_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_state_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_taskID = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID';
  create?: Maybe<PayloadJobsDocAccessFields_log_taskID_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_taskID_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_taskID_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_taskID_Update>;
};

export type PayloadJobsDocAccessFields_log_taskID_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_taskID_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_taskID_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_taskID_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_taskSlug = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug';
  create?: Maybe<PayloadJobsDocAccessFields_log_taskSlug_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_log_taskSlug_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_log_taskSlug_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_log_taskSlug_Update>;
};

export type PayloadJobsDocAccessFields_log_taskSlug_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_taskSlug_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_taskSlug_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_log_taskSlug_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_processing = {
  __typename?: 'PayloadJobsDocAccessFields_processing';
  create?: Maybe<PayloadJobsDocAccessFields_processing_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_processing_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_processing_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_processing_Update>;
};

export type PayloadJobsDocAccessFields_processing_Create = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_processing_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_processing_Read = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_processing_Update = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_queue = {
  __typename?: 'PayloadJobsDocAccessFields_queue';
  create?: Maybe<PayloadJobsDocAccessFields_queue_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_queue_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_queue_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_queue_Update>;
};

export type PayloadJobsDocAccessFields_queue_Create = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_queue_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_queue_Read = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_queue_Update = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_taskSlug = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug';
  create?: Maybe<PayloadJobsDocAccessFields_taskSlug_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_taskSlug_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_taskSlug_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_taskSlug_Update>;
};

export type PayloadJobsDocAccessFields_taskSlug_Create = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_taskSlug_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_taskSlug_Read = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_taskSlug_Update = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_taskStatus = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus';
  create?: Maybe<PayloadJobsDocAccessFields_taskStatus_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_taskStatus_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_taskStatus_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_taskStatus_Update>;
};

export type PayloadJobsDocAccessFields_taskStatus_Create = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_taskStatus_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_taskStatus_Read = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_taskStatus_Update = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_totalTried = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried';
  create?: Maybe<PayloadJobsDocAccessFields_totalTried_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_totalTried_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_totalTried_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_totalTried_Update>;
};

export type PayloadJobsDocAccessFields_totalTried_Create = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_totalTried_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_totalTried_Read = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_totalTried_Update = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_updatedAt = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt';
  create?: Maybe<PayloadJobsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_updatedAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_updatedAt_Update>;
};

export type PayloadJobsDocAccessFields_updatedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_updatedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_updatedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_updatedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_waitUntil = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil';
  create?: Maybe<PayloadJobsDocAccessFields_waitUntil_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_waitUntil_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_waitUntil_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_waitUntil_Update>;
};

export type PayloadJobsDocAccessFields_waitUntil_Create = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_waitUntil_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_waitUntil_Read = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsDocAccessFields_waitUntil_Update = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields = {
  __typename?: 'PayloadJobsFields';
  completedAt?: Maybe<PayloadJobsFields_completedAt>;
  createdAt?: Maybe<PayloadJobsFields_createdAt>;
  error?: Maybe<PayloadJobsFields_error>;
  hasError?: Maybe<PayloadJobsFields_hasError>;
  input?: Maybe<PayloadJobsFields_input>;
  log?: Maybe<PayloadJobsFields_log>;
  processing?: Maybe<PayloadJobsFields_processing>;
  queue?: Maybe<PayloadJobsFields_queue>;
  taskSlug?: Maybe<PayloadJobsFields_taskSlug>;
  taskStatus?: Maybe<PayloadJobsFields_taskStatus>;
  totalTried?: Maybe<PayloadJobsFields_totalTried>;
  updatedAt?: Maybe<PayloadJobsFields_updatedAt>;
  waitUntil?: Maybe<PayloadJobsFields_waitUntil>;
};

export type PayloadJobsFields_completedAt = {
  __typename?: 'PayloadJobsFields_completedAt';
  create?: Maybe<PayloadJobsFields_completedAt_Create>;
  delete?: Maybe<PayloadJobsFields_completedAt_Delete>;
  read?: Maybe<PayloadJobsFields_completedAt_Read>;
  update?: Maybe<PayloadJobsFields_completedAt_Update>;
};

export type PayloadJobsFields_completedAt_Create = {
  __typename?: 'PayloadJobsFields_completedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_completedAt_Delete = {
  __typename?: 'PayloadJobsFields_completedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_completedAt_Read = {
  __typename?: 'PayloadJobsFields_completedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_completedAt_Update = {
  __typename?: 'PayloadJobsFields_completedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_createdAt = {
  __typename?: 'PayloadJobsFields_createdAt';
  create?: Maybe<PayloadJobsFields_createdAt_Create>;
  delete?: Maybe<PayloadJobsFields_createdAt_Delete>;
  read?: Maybe<PayloadJobsFields_createdAt_Read>;
  update?: Maybe<PayloadJobsFields_createdAt_Update>;
};

export type PayloadJobsFields_createdAt_Create = {
  __typename?: 'PayloadJobsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_createdAt_Delete = {
  __typename?: 'PayloadJobsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_createdAt_Read = {
  __typename?: 'PayloadJobsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_createdAt_Update = {
  __typename?: 'PayloadJobsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_error = {
  __typename?: 'PayloadJobsFields_error';
  create?: Maybe<PayloadJobsFields_error_Create>;
  delete?: Maybe<PayloadJobsFields_error_Delete>;
  read?: Maybe<PayloadJobsFields_error_Read>;
  update?: Maybe<PayloadJobsFields_error_Update>;
};

export type PayloadJobsFields_error_Create = {
  __typename?: 'PayloadJobsFields_error_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_error_Delete = {
  __typename?: 'PayloadJobsFields_error_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_error_Read = {
  __typename?: 'PayloadJobsFields_error_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_error_Update = {
  __typename?: 'PayloadJobsFields_error_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_hasError = {
  __typename?: 'PayloadJobsFields_hasError';
  create?: Maybe<PayloadJobsFields_hasError_Create>;
  delete?: Maybe<PayloadJobsFields_hasError_Delete>;
  read?: Maybe<PayloadJobsFields_hasError_Read>;
  update?: Maybe<PayloadJobsFields_hasError_Update>;
};

export type PayloadJobsFields_hasError_Create = {
  __typename?: 'PayloadJobsFields_hasError_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_hasError_Delete = {
  __typename?: 'PayloadJobsFields_hasError_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_hasError_Read = {
  __typename?: 'PayloadJobsFields_hasError_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_hasError_Update = {
  __typename?: 'PayloadJobsFields_hasError_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_input = {
  __typename?: 'PayloadJobsFields_input';
  create?: Maybe<PayloadJobsFields_input_Create>;
  delete?: Maybe<PayloadJobsFields_input_Delete>;
  read?: Maybe<PayloadJobsFields_input_Read>;
  update?: Maybe<PayloadJobsFields_input_Update>;
};

export type PayloadJobsFields_input_Create = {
  __typename?: 'PayloadJobsFields_input_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_input_Delete = {
  __typename?: 'PayloadJobsFields_input_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_input_Read = {
  __typename?: 'PayloadJobsFields_input_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_input_Update = {
  __typename?: 'PayloadJobsFields_input_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log = {
  __typename?: 'PayloadJobsFields_log';
  create?: Maybe<PayloadJobsFields_log_Create>;
  delete?: Maybe<PayloadJobsFields_log_Delete>;
  fields?: Maybe<PayloadJobsFields_log_Fields>;
  read?: Maybe<PayloadJobsFields_log_Read>;
  update?: Maybe<PayloadJobsFields_log_Update>;
};

export type PayloadJobsFields_log_Create = {
  __typename?: 'PayloadJobsFields_log_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_Delete = {
  __typename?: 'PayloadJobsFields_log_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_Fields = {
  __typename?: 'PayloadJobsFields_log_Fields';
  completedAt?: Maybe<PayloadJobsFields_log_completedAt>;
  error?: Maybe<PayloadJobsFields_log_error>;
  executedAt?: Maybe<PayloadJobsFields_log_executedAt>;
  id?: Maybe<PayloadJobsFields_log_id>;
  input?: Maybe<PayloadJobsFields_log_input>;
  output?: Maybe<PayloadJobsFields_log_output>;
  parent?: Maybe<PayloadJobsFields_log_parent>;
  state?: Maybe<PayloadJobsFields_log_state>;
  taskID?: Maybe<PayloadJobsFields_log_taskID>;
  taskSlug?: Maybe<PayloadJobsFields_log_taskSlug>;
};

export type PayloadJobsFields_log_Read = {
  __typename?: 'PayloadJobsFields_log_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_Update = {
  __typename?: 'PayloadJobsFields_log_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_completedAt = {
  __typename?: 'PayloadJobsFields_log_completedAt';
  create?: Maybe<PayloadJobsFields_log_completedAt_Create>;
  delete?: Maybe<PayloadJobsFields_log_completedAt_Delete>;
  read?: Maybe<PayloadJobsFields_log_completedAt_Read>;
  update?: Maybe<PayloadJobsFields_log_completedAt_Update>;
};

export type PayloadJobsFields_log_completedAt_Create = {
  __typename?: 'PayloadJobsFields_log_completedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_completedAt_Delete = {
  __typename?: 'PayloadJobsFields_log_completedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_completedAt_Read = {
  __typename?: 'PayloadJobsFields_log_completedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_completedAt_Update = {
  __typename?: 'PayloadJobsFields_log_completedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_error = {
  __typename?: 'PayloadJobsFields_log_error';
  create?: Maybe<PayloadJobsFields_log_error_Create>;
  delete?: Maybe<PayloadJobsFields_log_error_Delete>;
  read?: Maybe<PayloadJobsFields_log_error_Read>;
  update?: Maybe<PayloadJobsFields_log_error_Update>;
};

export type PayloadJobsFields_log_error_Create = {
  __typename?: 'PayloadJobsFields_log_error_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_error_Delete = {
  __typename?: 'PayloadJobsFields_log_error_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_error_Read = {
  __typename?: 'PayloadJobsFields_log_error_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_error_Update = {
  __typename?: 'PayloadJobsFields_log_error_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_executedAt = {
  __typename?: 'PayloadJobsFields_log_executedAt';
  create?: Maybe<PayloadJobsFields_log_executedAt_Create>;
  delete?: Maybe<PayloadJobsFields_log_executedAt_Delete>;
  read?: Maybe<PayloadJobsFields_log_executedAt_Read>;
  update?: Maybe<PayloadJobsFields_log_executedAt_Update>;
};

export type PayloadJobsFields_log_executedAt_Create = {
  __typename?: 'PayloadJobsFields_log_executedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_executedAt_Delete = {
  __typename?: 'PayloadJobsFields_log_executedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_executedAt_Read = {
  __typename?: 'PayloadJobsFields_log_executedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_executedAt_Update = {
  __typename?: 'PayloadJobsFields_log_executedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_id = {
  __typename?: 'PayloadJobsFields_log_id';
  create?: Maybe<PayloadJobsFields_log_id_Create>;
  delete?: Maybe<PayloadJobsFields_log_id_Delete>;
  read?: Maybe<PayloadJobsFields_log_id_Read>;
  update?: Maybe<PayloadJobsFields_log_id_Update>;
};

export type PayloadJobsFields_log_id_Create = {
  __typename?: 'PayloadJobsFields_log_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_id_Delete = {
  __typename?: 'PayloadJobsFields_log_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_id_Read = {
  __typename?: 'PayloadJobsFields_log_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_id_Update = {
  __typename?: 'PayloadJobsFields_log_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_input = {
  __typename?: 'PayloadJobsFields_log_input';
  create?: Maybe<PayloadJobsFields_log_input_Create>;
  delete?: Maybe<PayloadJobsFields_log_input_Delete>;
  read?: Maybe<PayloadJobsFields_log_input_Read>;
  update?: Maybe<PayloadJobsFields_log_input_Update>;
};

export type PayloadJobsFields_log_input_Create = {
  __typename?: 'PayloadJobsFields_log_input_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_input_Delete = {
  __typename?: 'PayloadJobsFields_log_input_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_input_Read = {
  __typename?: 'PayloadJobsFields_log_input_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_input_Update = {
  __typename?: 'PayloadJobsFields_log_input_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_output = {
  __typename?: 'PayloadJobsFields_log_output';
  create?: Maybe<PayloadJobsFields_log_output_Create>;
  delete?: Maybe<PayloadJobsFields_log_output_Delete>;
  read?: Maybe<PayloadJobsFields_log_output_Read>;
  update?: Maybe<PayloadJobsFields_log_output_Update>;
};

export type PayloadJobsFields_log_output_Create = {
  __typename?: 'PayloadJobsFields_log_output_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_output_Delete = {
  __typename?: 'PayloadJobsFields_log_output_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_output_Read = {
  __typename?: 'PayloadJobsFields_log_output_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_output_Update = {
  __typename?: 'PayloadJobsFields_log_output_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent = {
  __typename?: 'PayloadJobsFields_log_parent';
  create?: Maybe<PayloadJobsFields_log_parent_Create>;
  delete?: Maybe<PayloadJobsFields_log_parent_Delete>;
  fields?: Maybe<PayloadJobsFields_log_parent_Fields>;
  read?: Maybe<PayloadJobsFields_log_parent_Read>;
  update?: Maybe<PayloadJobsFields_log_parent_Update>;
};

export type PayloadJobsFields_log_parent_Create = {
  __typename?: 'PayloadJobsFields_log_parent_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_Delete = {
  __typename?: 'PayloadJobsFields_log_parent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_Fields = {
  __typename?: 'PayloadJobsFields_log_parent_Fields';
  taskID?: Maybe<PayloadJobsFields_log_parent_taskID>;
  taskSlug?: Maybe<PayloadJobsFields_log_parent_taskSlug>;
};

export type PayloadJobsFields_log_parent_Read = {
  __typename?: 'PayloadJobsFields_log_parent_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_Update = {
  __typename?: 'PayloadJobsFields_log_parent_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_taskID = {
  __typename?: 'PayloadJobsFields_log_parent_taskID';
  create?: Maybe<PayloadJobsFields_log_parent_taskID_Create>;
  delete?: Maybe<PayloadJobsFields_log_parent_taskID_Delete>;
  read?: Maybe<PayloadJobsFields_log_parent_taskID_Read>;
  update?: Maybe<PayloadJobsFields_log_parent_taskID_Update>;
};

export type PayloadJobsFields_log_parent_taskID_Create = {
  __typename?: 'PayloadJobsFields_log_parent_taskID_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_taskID_Delete = {
  __typename?: 'PayloadJobsFields_log_parent_taskID_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_taskID_Read = {
  __typename?: 'PayloadJobsFields_log_parent_taskID_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_taskID_Update = {
  __typename?: 'PayloadJobsFields_log_parent_taskID_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_taskSlug = {
  __typename?: 'PayloadJobsFields_log_parent_taskSlug';
  create?: Maybe<PayloadJobsFields_log_parent_taskSlug_Create>;
  delete?: Maybe<PayloadJobsFields_log_parent_taskSlug_Delete>;
  read?: Maybe<PayloadJobsFields_log_parent_taskSlug_Read>;
  update?: Maybe<PayloadJobsFields_log_parent_taskSlug_Update>;
};

export type PayloadJobsFields_log_parent_taskSlug_Create = {
  __typename?: 'PayloadJobsFields_log_parent_taskSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_taskSlug_Delete = {
  __typename?: 'PayloadJobsFields_log_parent_taskSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_taskSlug_Read = {
  __typename?: 'PayloadJobsFields_log_parent_taskSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_parent_taskSlug_Update = {
  __typename?: 'PayloadJobsFields_log_parent_taskSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_state = {
  __typename?: 'PayloadJobsFields_log_state';
  create?: Maybe<PayloadJobsFields_log_state_Create>;
  delete?: Maybe<PayloadJobsFields_log_state_Delete>;
  read?: Maybe<PayloadJobsFields_log_state_Read>;
  update?: Maybe<PayloadJobsFields_log_state_Update>;
};

export type PayloadJobsFields_log_state_Create = {
  __typename?: 'PayloadJobsFields_log_state_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_state_Delete = {
  __typename?: 'PayloadJobsFields_log_state_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_state_Read = {
  __typename?: 'PayloadJobsFields_log_state_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_state_Update = {
  __typename?: 'PayloadJobsFields_log_state_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_taskID = {
  __typename?: 'PayloadJobsFields_log_taskID';
  create?: Maybe<PayloadJobsFields_log_taskID_Create>;
  delete?: Maybe<PayloadJobsFields_log_taskID_Delete>;
  read?: Maybe<PayloadJobsFields_log_taskID_Read>;
  update?: Maybe<PayloadJobsFields_log_taskID_Update>;
};

export type PayloadJobsFields_log_taskID_Create = {
  __typename?: 'PayloadJobsFields_log_taskID_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_taskID_Delete = {
  __typename?: 'PayloadJobsFields_log_taskID_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_taskID_Read = {
  __typename?: 'PayloadJobsFields_log_taskID_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_taskID_Update = {
  __typename?: 'PayloadJobsFields_log_taskID_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_taskSlug = {
  __typename?: 'PayloadJobsFields_log_taskSlug';
  create?: Maybe<PayloadJobsFields_log_taskSlug_Create>;
  delete?: Maybe<PayloadJobsFields_log_taskSlug_Delete>;
  read?: Maybe<PayloadJobsFields_log_taskSlug_Read>;
  update?: Maybe<PayloadJobsFields_log_taskSlug_Update>;
};

export type PayloadJobsFields_log_taskSlug_Create = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_taskSlug_Delete = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_taskSlug_Read = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_log_taskSlug_Update = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_processing = {
  __typename?: 'PayloadJobsFields_processing';
  create?: Maybe<PayloadJobsFields_processing_Create>;
  delete?: Maybe<PayloadJobsFields_processing_Delete>;
  read?: Maybe<PayloadJobsFields_processing_Read>;
  update?: Maybe<PayloadJobsFields_processing_Update>;
};

export type PayloadJobsFields_processing_Create = {
  __typename?: 'PayloadJobsFields_processing_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_processing_Delete = {
  __typename?: 'PayloadJobsFields_processing_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_processing_Read = {
  __typename?: 'PayloadJobsFields_processing_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_processing_Update = {
  __typename?: 'PayloadJobsFields_processing_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_queue = {
  __typename?: 'PayloadJobsFields_queue';
  create?: Maybe<PayloadJobsFields_queue_Create>;
  delete?: Maybe<PayloadJobsFields_queue_Delete>;
  read?: Maybe<PayloadJobsFields_queue_Read>;
  update?: Maybe<PayloadJobsFields_queue_Update>;
};

export type PayloadJobsFields_queue_Create = {
  __typename?: 'PayloadJobsFields_queue_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_queue_Delete = {
  __typename?: 'PayloadJobsFields_queue_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_queue_Read = {
  __typename?: 'PayloadJobsFields_queue_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_queue_Update = {
  __typename?: 'PayloadJobsFields_queue_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_taskSlug = {
  __typename?: 'PayloadJobsFields_taskSlug';
  create?: Maybe<PayloadJobsFields_taskSlug_Create>;
  delete?: Maybe<PayloadJobsFields_taskSlug_Delete>;
  read?: Maybe<PayloadJobsFields_taskSlug_Read>;
  update?: Maybe<PayloadJobsFields_taskSlug_Update>;
};

export type PayloadJobsFields_taskSlug_Create = {
  __typename?: 'PayloadJobsFields_taskSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_taskSlug_Delete = {
  __typename?: 'PayloadJobsFields_taskSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_taskSlug_Read = {
  __typename?: 'PayloadJobsFields_taskSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_taskSlug_Update = {
  __typename?: 'PayloadJobsFields_taskSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_taskStatus = {
  __typename?: 'PayloadJobsFields_taskStatus';
  create?: Maybe<PayloadJobsFields_taskStatus_Create>;
  delete?: Maybe<PayloadJobsFields_taskStatus_Delete>;
  read?: Maybe<PayloadJobsFields_taskStatus_Read>;
  update?: Maybe<PayloadJobsFields_taskStatus_Update>;
};

export type PayloadJobsFields_taskStatus_Create = {
  __typename?: 'PayloadJobsFields_taskStatus_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_taskStatus_Delete = {
  __typename?: 'PayloadJobsFields_taskStatus_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_taskStatus_Read = {
  __typename?: 'PayloadJobsFields_taskStatus_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_taskStatus_Update = {
  __typename?: 'PayloadJobsFields_taskStatus_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_totalTried = {
  __typename?: 'PayloadJobsFields_totalTried';
  create?: Maybe<PayloadJobsFields_totalTried_Create>;
  delete?: Maybe<PayloadJobsFields_totalTried_Delete>;
  read?: Maybe<PayloadJobsFields_totalTried_Read>;
  update?: Maybe<PayloadJobsFields_totalTried_Update>;
};

export type PayloadJobsFields_totalTried_Create = {
  __typename?: 'PayloadJobsFields_totalTried_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_totalTried_Delete = {
  __typename?: 'PayloadJobsFields_totalTried_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_totalTried_Read = {
  __typename?: 'PayloadJobsFields_totalTried_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_totalTried_Update = {
  __typename?: 'PayloadJobsFields_totalTried_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_updatedAt = {
  __typename?: 'PayloadJobsFields_updatedAt';
  create?: Maybe<PayloadJobsFields_updatedAt_Create>;
  delete?: Maybe<PayloadJobsFields_updatedAt_Delete>;
  read?: Maybe<PayloadJobsFields_updatedAt_Read>;
  update?: Maybe<PayloadJobsFields_updatedAt_Update>;
};

export type PayloadJobsFields_updatedAt_Create = {
  __typename?: 'PayloadJobsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_updatedAt_Delete = {
  __typename?: 'PayloadJobsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_updatedAt_Read = {
  __typename?: 'PayloadJobsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_updatedAt_Update = {
  __typename?: 'PayloadJobsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_waitUntil = {
  __typename?: 'PayloadJobsFields_waitUntil';
  create?: Maybe<PayloadJobsFields_waitUntil_Create>;
  delete?: Maybe<PayloadJobsFields_waitUntil_Delete>;
  read?: Maybe<PayloadJobsFields_waitUntil_Read>;
  update?: Maybe<PayloadJobsFields_waitUntil_Update>;
};

export type PayloadJobsFields_waitUntil_Create = {
  __typename?: 'PayloadJobsFields_waitUntil_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_waitUntil_Delete = {
  __typename?: 'PayloadJobsFields_waitUntil_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_waitUntil_Read = {
  __typename?: 'PayloadJobsFields_waitUntil_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsFields_waitUntil_Update = {
  __typename?: 'PayloadJobsFields_waitUntil_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadJobsReadAccess = {
  __typename?: 'PayloadJobsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadJobsReadDocAccess = {
  __typename?: 'PayloadJobsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadJobsUpdateAccess = {
  __typename?: 'PayloadJobsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadJobsUpdateDocAccess = {
  __typename?: 'PayloadJobsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKv = {
  __typename?: 'PayloadKv';
  data: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
};

export type PayloadKvCreateAccess = {
  __typename?: 'PayloadKvCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvCreateDocAccess = {
  __typename?: 'PayloadKvCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteAccess = {
  __typename?: 'PayloadKvDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteDocAccess = {
  __typename?: 'PayloadKvDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDocAccessFields = {
  __typename?: 'PayloadKvDocAccessFields';
  data?: Maybe<PayloadKvDocAccessFields_data>;
  key?: Maybe<PayloadKvDocAccessFields_key>;
};

export type PayloadKvDocAccessFields_data = {
  __typename?: 'PayloadKvDocAccessFields_data';
  create?: Maybe<PayloadKvDocAccessFields_data_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_data_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_data_Read>;
  update?: Maybe<PayloadKvDocAccessFields_data_Update>;
};

export type PayloadKvDocAccessFields_data_Create = {
  __typename?: 'PayloadKvDocAccessFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_data_Delete = {
  __typename?: 'PayloadKvDocAccessFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_data_Read = {
  __typename?: 'PayloadKvDocAccessFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_data_Update = {
  __typename?: 'PayloadKvDocAccessFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_key = {
  __typename?: 'PayloadKvDocAccessFields_key';
  create?: Maybe<PayloadKvDocAccessFields_key_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_key_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_key_Read>;
  update?: Maybe<PayloadKvDocAccessFields_key_Update>;
};

export type PayloadKvDocAccessFields_key_Create = {
  __typename?: 'PayloadKvDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_key_Delete = {
  __typename?: 'PayloadKvDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_key_Read = {
  __typename?: 'PayloadKvDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_key_Update = {
  __typename?: 'PayloadKvDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields = {
  __typename?: 'PayloadKvFields';
  data?: Maybe<PayloadKvFields_data>;
  key?: Maybe<PayloadKvFields_key>;
};

export type PayloadKvFields_data = {
  __typename?: 'PayloadKvFields_data';
  create?: Maybe<PayloadKvFields_data_Create>;
  delete?: Maybe<PayloadKvFields_data_Delete>;
  read?: Maybe<PayloadKvFields_data_Read>;
  update?: Maybe<PayloadKvFields_data_Update>;
};

export type PayloadKvFields_data_Create = {
  __typename?: 'PayloadKvFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_data_Delete = {
  __typename?: 'PayloadKvFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_data_Read = {
  __typename?: 'PayloadKvFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_data_Update = {
  __typename?: 'PayloadKvFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_key = {
  __typename?: 'PayloadKvFields_key';
  create?: Maybe<PayloadKvFields_key_Create>;
  delete?: Maybe<PayloadKvFields_key_Delete>;
  read?: Maybe<PayloadKvFields_key_Read>;
  update?: Maybe<PayloadKvFields_key_Update>;
};

export type PayloadKvFields_key_Create = {
  __typename?: 'PayloadKvFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_key_Delete = {
  __typename?: 'PayloadKvFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_key_Read = {
  __typename?: 'PayloadKvFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_key_Update = {
  __typename?: 'PayloadKvFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvReadAccess = {
  __typename?: 'PayloadKvReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvReadDocAccess = {
  __typename?: 'PayloadKvReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateAccess = {
  __typename?: 'PayloadKvUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateDocAccess = {
  __typename?: 'PayloadKvUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKv_data_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadKv_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadKv_key_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadKv_where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_where_or>>>;
  data?: InputMaybe<PayloadKv_data_operator>;
  id?: InputMaybe<PayloadKv_id_operator>;
  key?: InputMaybe<PayloadKv_key_operator>;
};

export type PayloadKv_where_and = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_where_or>>>;
  data?: InputMaybe<PayloadKv_data_operator>;
  id?: InputMaybe<PayloadKv_id_operator>;
  key?: InputMaybe<PayloadKv_key_operator>;
};

export type PayloadKv_where_or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_where_or>>>;
  data?: InputMaybe<PayloadKv_data_operator>;
  id?: InputMaybe<PayloadKv_id_operator>;
  key?: InputMaybe<PayloadKv_key_operator>;
};

export type PayloadKvs = {
  __typename?: 'PayloadKvs';
  docs: Array<PayloadKv>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadLockedDocument_User_Relationship;
};


export type PayloadLockedDocumentdocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type PayloadLockedDocumentuserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  AiCallLogs = 'ai_call_logs',
  Authors = 'authors',
  Media = 'media',
  MicroPostExternalLinks = 'micro_post_external_links',
  MicroPosts = 'micro_posts',
  Posts = 'posts',
  Search = 'search',
  Tags = 'tags',
  Users = 'users'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = Ai_call_log | Author | Media | Micro_post | Micro_post_external_link | Post | Search | Tag | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  AiCallLogs = 'ai_call_logs',
  Authors = 'authors',
  Media = 'media',
  MicroPostExternalLinks = 'micro_post_external_links',
  MicroPosts = 'micro_posts',
  Posts = 'posts',
  Search = 'search',
  Tags = 'tags',
  Users = 'users'
}

export enum PayloadLockedDocument_Document_RelationTo {
  AiCallLogs = 'ai_call_logs',
  Authors = 'authors',
  Media = 'media',
  MicroPostExternalLinks = 'micro_post_external_links',
  MicroPosts = 'micro_posts',
  Posts = 'posts',
  Search = 'search',
  Tags = 'tags',
  Users = 'users'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_document_Relation_RelationTo {
  AiCallLogs = 'ai_call_logs',
  Authors = 'authors',
  Media = 'media',
  MicroPostExternalLinks = 'micro_post_external_links',
  MicroPosts = 'micro_posts',
  Posts = 'posts',
  Search = 'search',
  Tags = 'tags',
  Users = 'users'
}

export type PayloadLockedDocument_globalSlug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_user_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_user_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_user_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_createdAt_operator>;
  document?: InputMaybe<PayloadLockedDocument_document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_globalSlug_operator>;
  id?: InputMaybe<PayloadLockedDocument_id_operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_updatedAt_operator>;
  user?: InputMaybe<PayloadLockedDocument_user_Relation>;
};

export type PayloadLockedDocument_where_and = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_createdAt_operator>;
  document?: InputMaybe<PayloadLockedDocument_document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_globalSlug_operator>;
  id?: InputMaybe<PayloadLockedDocument_id_operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_updatedAt_operator>;
  user?: InputMaybe<PayloadLockedDocument_user_Relation>;
};

export type PayloadLockedDocument_where_or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_where_or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_createdAt_operator>;
  document?: InputMaybe<PayloadLockedDocument_document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_globalSlug_operator>;
  id?: InputMaybe<PayloadLockedDocument_id_operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_updatedAt_operator>;
  user?: InputMaybe<PayloadLockedDocument_user_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_user>;
};

export type PayloadLockedDocumentsDocAccessFields_createdAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_createdAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_createdAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_createdAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_createdAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_createdAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_globalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_globalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_globalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_globalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_globalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_globalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_updatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_updatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_updatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_updatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_updatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_updatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_user = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_user_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_user_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_user_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_user_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_user_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_user_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_user_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_user_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_createdAt>;
  document?: Maybe<PayloadLockedDocumentsFields_document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_globalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_updatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_user>;
};

export type PayloadLockedDocumentsFields_createdAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_createdAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_createdAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_createdAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_createdAt_Update>;
};

export type PayloadLockedDocumentsFields_createdAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_createdAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_createdAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_createdAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_document_Update>;
};

export type PayloadLockedDocumentsFields_document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_globalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_globalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_globalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_globalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_globalSlug_Update>;
};

export type PayloadLockedDocumentsFields_globalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_globalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_globalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_globalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_updatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_updatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_updatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_updatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_updatedAt_Update>;
};

export type PayloadLockedDocumentsFields_updatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_updatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_updatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_updatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_user = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_user_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_user_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_user_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_user_Update>;
};

export type PayloadLockedDocumentsFields_user_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_user_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_user_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_user_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};


export type PayloadPreferenceuserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_key_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_user_Relation = {
  relationTo?: InputMaybe<PayloadPreference_user_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_user_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_value_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_where_or>>>;
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
};

export type PayloadPreference_where_and = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_where_or>>>;
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
};

export type PayloadPreference_where_or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_where_or>>>;
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_createdAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_updatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_user>;
  value?: Maybe<PayloadPreferencesDocAccessFields_value>;
};

export type PayloadPreferencesDocAccessFields_createdAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Update>;
};

export type PayloadPreferencesDocAccessFields_createdAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_createdAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_createdAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_createdAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_key_Update>;
};

export type PayloadPreferencesDocAccessFields_key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_updatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_updatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_updatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_updatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_updatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_user = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_user_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_user_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_user_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_user_Update>;
};

export type PayloadPreferencesDocAccessFields_user_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_user_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_user_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_user_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_value_Update>;
};

export type PayloadPreferencesDocAccessFields_value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_createdAt>;
  key?: Maybe<PayloadPreferencesFields_key>;
  updatedAt?: Maybe<PayloadPreferencesFields_updatedAt>;
  user?: Maybe<PayloadPreferencesFields_user>;
  value?: Maybe<PayloadPreferencesFields_value>;
};

export type PayloadPreferencesFields_createdAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_createdAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_createdAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_createdAt_Read>;
  update?: Maybe<PayloadPreferencesFields_createdAt_Update>;
};

export type PayloadPreferencesFields_createdAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_createdAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_createdAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_createdAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_key_Create>;
  delete?: Maybe<PayloadPreferencesFields_key_Delete>;
  read?: Maybe<PayloadPreferencesFields_key_Read>;
  update?: Maybe<PayloadPreferencesFields_key_Update>;
};

export type PayloadPreferencesFields_key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_updatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_updatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_updatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_updatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_updatedAt_Update>;
};

export type PayloadPreferencesFields_updatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_updatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_updatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_updatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_user = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_user_Create>;
  delete?: Maybe<PayloadPreferencesFields_user_Delete>;
  read?: Maybe<PayloadPreferencesFields_user_Read>;
  update?: Maybe<PayloadPreferencesFields_user_Update>;
};

export type PayloadPreferencesFields_user_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_user_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_user_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_user_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_value_Create>;
  delete?: Maybe<PayloadPreferencesFields_value_Delete>;
  read?: Maybe<PayloadPreferencesFields_value_Read>;
  update?: Maybe<PayloadPreferencesFields_value_Update>;
};

export type PayloadPreferencesFields_value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadQueryPreset = {
  __typename?: 'PayloadQueryPreset';
  access?: Maybe<PayloadQueryPreset_Access>;
  columns?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  groupBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isShared?: Maybe<Scalars['Boolean']['output']>;
  isTemp?: Maybe<Scalars['Boolean']['output']>;
  relatedCollection: PayloadQueryPreset_relatedCollection;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  where?: Maybe<Scalars['JSON']['output']>;
};

export enum PayloadQueryPresetUpdate_Access_Delete_constraint_MutationInput {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export enum PayloadQueryPresetUpdate_Access_Read_constraint_MutationInput {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export enum PayloadQueryPresetUpdate_Access_Update_constraint_MutationInput {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export enum PayloadQueryPresetUpdate_relatedCollection_MutationInput {
  MicroPosts = 'micro_posts'
}

export type PayloadQueryPreset_Access = {
  __typename?: 'PayloadQueryPreset_Access';
  delete?: Maybe<PayloadQueryPreset_Access_Delete>;
  read?: Maybe<PayloadQueryPreset_Access_Read>;
  update?: Maybe<PayloadQueryPreset_Access_Update>;
};

export type PayloadQueryPreset_Access_Delete = {
  __typename?: 'PayloadQueryPreset_Access_Delete';
  constraint?: Maybe<PayloadQueryPreset_Access_Delete_constraint>;
  users?: Maybe<Array<User>>;
};


export type PayloadQueryPreset_Access_DeleteusersArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum PayloadQueryPreset_Access_Delete_constraint {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export enum PayloadQueryPreset_Access_Delete_constraint_MutationInput {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export type PayloadQueryPreset_Access_Read = {
  __typename?: 'PayloadQueryPreset_Access_Read';
  constraint?: Maybe<PayloadQueryPreset_Access_Read_constraint>;
  users?: Maybe<Array<User>>;
};


export type PayloadQueryPreset_Access_ReadusersArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum PayloadQueryPreset_Access_Read_constraint {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export enum PayloadQueryPreset_Access_Read_constraint_MutationInput {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export type PayloadQueryPreset_Access_Update = {
  __typename?: 'PayloadQueryPreset_Access_Update';
  constraint?: Maybe<PayloadQueryPreset_Access_Update_constraint>;
  users?: Maybe<Array<User>>;
};


export type PayloadQueryPreset_Access_UpdateusersArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum PayloadQueryPreset_Access_Update_constraint {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export enum PayloadQueryPreset_Access_Update_constraint_MutationInput {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export enum PayloadQueryPreset_access__delete__constraint_Input {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export type PayloadQueryPreset_access__delete__constraint_operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_access__delete__constraint_Input>>>;
  equals?: InputMaybe<PayloadQueryPreset_access__delete__constraint_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_access__delete__constraint_Input>>>;
  not_equals?: InputMaybe<PayloadQueryPreset_access__delete__constraint_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_access__delete__constraint_Input>>>;
};

export type PayloadQueryPreset_access__delete__users_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum PayloadQueryPreset_access__read__constraint_Input {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export type PayloadQueryPreset_access__read__constraint_operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_access__read__constraint_Input>>>;
  equals?: InputMaybe<PayloadQueryPreset_access__read__constraint_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_access__read__constraint_Input>>>;
  not_equals?: InputMaybe<PayloadQueryPreset_access__read__constraint_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_access__read__constraint_Input>>>;
};

export type PayloadQueryPreset_access__read__users_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum PayloadQueryPreset_access__update__constraint_Input {
  Everyone = 'everyone',
  OnlyMe = 'onlyMe',
  SpecificUsers = 'specificUsers'
}

export type PayloadQueryPreset_access__update__constraint_operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_access__update__constraint_Input>>>;
  equals?: InputMaybe<PayloadQueryPreset_access__update__constraint_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_access__update__constraint_Input>>>;
  not_equals?: InputMaybe<PayloadQueryPreset_access__update__constraint_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_access__update__constraint_Input>>>;
};

export type PayloadQueryPreset_access__update__users_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type PayloadQueryPreset_columns_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadQueryPreset_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadQueryPreset_groupBy_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadQueryPreset_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadQueryPreset_isShared_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadQueryPreset_isTemp_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PayloadQueryPreset_relatedCollection {
  MicroPosts = 'micro_posts'
}

export enum PayloadQueryPreset_relatedCollection_Input {
  MicroPosts = 'micro_posts'
}

export enum PayloadQueryPreset_relatedCollection_MutationInput {
  MicroPosts = 'micro_posts'
}

export type PayloadQueryPreset_relatedCollection_operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_relatedCollection_Input>>>;
  equals?: InputMaybe<PayloadQueryPreset_relatedCollection_Input>;
  in?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_relatedCollection_Input>>>;
  not_equals?: InputMaybe<PayloadQueryPreset_relatedCollection_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_relatedCollection_Input>>>;
};

export type PayloadQueryPreset_title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadQueryPreset_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadQueryPreset_where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_where_or>>>;
  access__delete__constraint?: InputMaybe<PayloadQueryPreset_access__delete__constraint_operator>;
  access__delete__users?: InputMaybe<PayloadQueryPreset_access__delete__users_operator>;
  access__read__constraint?: InputMaybe<PayloadQueryPreset_access__read__constraint_operator>;
  access__read__users?: InputMaybe<PayloadQueryPreset_access__read__users_operator>;
  access__update__constraint?: InputMaybe<PayloadQueryPreset_access__update__constraint_operator>;
  access__update__users?: InputMaybe<PayloadQueryPreset_access__update__users_operator>;
  columns?: InputMaybe<PayloadQueryPreset_columns_operator>;
  createdAt?: InputMaybe<PayloadQueryPreset_createdAt_operator>;
  groupBy?: InputMaybe<PayloadQueryPreset_groupBy_operator>;
  id?: InputMaybe<PayloadQueryPreset_id_operator>;
  isShared?: InputMaybe<PayloadQueryPreset_isShared_operator>;
  isTemp?: InputMaybe<PayloadQueryPreset_isTemp_operator>;
  relatedCollection?: InputMaybe<PayloadQueryPreset_relatedCollection_operator>;
  title?: InputMaybe<PayloadQueryPreset_title_operator>;
  updatedAt?: InputMaybe<PayloadQueryPreset_updatedAt_operator>;
  where?: InputMaybe<PayloadQueryPreset_where_operator>;
};

export type PayloadQueryPreset_where_and = {
  AND?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_where_or>>>;
  access__delete__constraint?: InputMaybe<PayloadQueryPreset_access__delete__constraint_operator>;
  access__delete__users?: InputMaybe<PayloadQueryPreset_access__delete__users_operator>;
  access__read__constraint?: InputMaybe<PayloadQueryPreset_access__read__constraint_operator>;
  access__read__users?: InputMaybe<PayloadQueryPreset_access__read__users_operator>;
  access__update__constraint?: InputMaybe<PayloadQueryPreset_access__update__constraint_operator>;
  access__update__users?: InputMaybe<PayloadQueryPreset_access__update__users_operator>;
  columns?: InputMaybe<PayloadQueryPreset_columns_operator>;
  createdAt?: InputMaybe<PayloadQueryPreset_createdAt_operator>;
  groupBy?: InputMaybe<PayloadQueryPreset_groupBy_operator>;
  id?: InputMaybe<PayloadQueryPreset_id_operator>;
  isShared?: InputMaybe<PayloadQueryPreset_isShared_operator>;
  isTemp?: InputMaybe<PayloadQueryPreset_isTemp_operator>;
  relatedCollection?: InputMaybe<PayloadQueryPreset_relatedCollection_operator>;
  title?: InputMaybe<PayloadQueryPreset_title_operator>;
  updatedAt?: InputMaybe<PayloadQueryPreset_updatedAt_operator>;
  where?: InputMaybe<PayloadQueryPreset_where_operator>;
};

export type PayloadQueryPreset_where_operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadQueryPreset_where_or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadQueryPreset_where_or>>>;
  access__delete__constraint?: InputMaybe<PayloadQueryPreset_access__delete__constraint_operator>;
  access__delete__users?: InputMaybe<PayloadQueryPreset_access__delete__users_operator>;
  access__read__constraint?: InputMaybe<PayloadQueryPreset_access__read__constraint_operator>;
  access__read__users?: InputMaybe<PayloadQueryPreset_access__read__users_operator>;
  access__update__constraint?: InputMaybe<PayloadQueryPreset_access__update__constraint_operator>;
  access__update__users?: InputMaybe<PayloadQueryPreset_access__update__users_operator>;
  columns?: InputMaybe<PayloadQueryPreset_columns_operator>;
  createdAt?: InputMaybe<PayloadQueryPreset_createdAt_operator>;
  groupBy?: InputMaybe<PayloadQueryPreset_groupBy_operator>;
  id?: InputMaybe<PayloadQueryPreset_id_operator>;
  isShared?: InputMaybe<PayloadQueryPreset_isShared_operator>;
  isTemp?: InputMaybe<PayloadQueryPreset_isTemp_operator>;
  relatedCollection?: InputMaybe<PayloadQueryPreset_relatedCollection_operator>;
  title?: InputMaybe<PayloadQueryPreset_title_operator>;
  updatedAt?: InputMaybe<PayloadQueryPreset_updatedAt_operator>;
  where?: InputMaybe<PayloadQueryPreset_where_operator>;
};

export type PayloadQueryPresets = {
  __typename?: 'PayloadQueryPresets';
  docs: Array<PayloadQueryPreset>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadQueryPresetsCreateAccess = {
  __typename?: 'PayloadQueryPresetsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadQueryPresetsCreateDocAccess = {
  __typename?: 'PayloadQueryPresetsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadQueryPresetsDeleteAccess = {
  __typename?: 'PayloadQueryPresetsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadQueryPresetsDeleteDocAccess = {
  __typename?: 'PayloadQueryPresetsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadQueryPresetsDocAccessFields = {
  __typename?: 'PayloadQueryPresetsDocAccessFields';
  access?: Maybe<PayloadQueryPresetsDocAccessFields_access>;
  columns?: Maybe<PayloadQueryPresetsDocAccessFields_columns>;
  createdAt?: Maybe<PayloadQueryPresetsDocAccessFields_createdAt>;
  groupBy?: Maybe<PayloadQueryPresetsDocAccessFields_groupBy>;
  isShared?: Maybe<PayloadQueryPresetsDocAccessFields_isShared>;
  isTemp?: Maybe<PayloadQueryPresetsDocAccessFields_isTemp>;
  relatedCollection?: Maybe<PayloadQueryPresetsDocAccessFields_relatedCollection>;
  title?: Maybe<PayloadQueryPresetsDocAccessFields_title>;
  updatedAt?: Maybe<PayloadQueryPresetsDocAccessFields_updatedAt>;
  where?: Maybe<PayloadQueryPresetsDocAccessFields_where>;
};

export type PayloadQueryPresetsDocAccessFields_access = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_Delete>;
  fields?: Maybe<PayloadQueryPresetsDocAccessFields_access_Fields>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_Fields = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_Fields';
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_update>;
};

export type PayloadQueryPresetsDocAccessFields_access_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_Delete>;
  fields?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_Fields>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_delete_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_Fields = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_Fields';
  constraint?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_constraint>;
  users?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_users>;
};

export type PayloadQueryPresetsDocAccessFields_access_delete_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_constraint = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_constraint';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_constraint_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_constraint_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_constraint_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_constraint_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_delete_constraint_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_constraint_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_constraint_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_constraint_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_constraint_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_constraint_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_constraint_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_constraint_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_users = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_users';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_users_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_users_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_users_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_delete_users_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_delete_users_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_users_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_users_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_users_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_users_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_users_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_delete_users_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_delete_users_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_Delete>;
  fields?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_Fields>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_read_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_Fields = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_Fields';
  constraint?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_constraint>;
  users?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_users>;
};

export type PayloadQueryPresetsDocAccessFields_access_read_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_constraint = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_constraint';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_constraint_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_constraint_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_constraint_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_constraint_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_read_constraint_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_constraint_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_constraint_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_constraint_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_constraint_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_constraint_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_constraint_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_constraint_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_users = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_users';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_users_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_users_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_users_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_read_users_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_read_users_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_users_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_users_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_users_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_users_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_users_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_read_users_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_read_users_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_Delete>;
  fields?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_Fields>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_update_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_Fields = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_Fields';
  constraint?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_constraint>;
  users?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_users>;
};

export type PayloadQueryPresetsDocAccessFields_access_update_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_constraint = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_constraint';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_constraint_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_constraint_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_constraint_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_constraint_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_update_constraint_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_constraint_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_constraint_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_constraint_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_constraint_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_constraint_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_constraint_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_constraint_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_users = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_users';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_users_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_users_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_users_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_access_update_users_Update>;
};

export type PayloadQueryPresetsDocAccessFields_access_update_users_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_users_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_users_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_users_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_users_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_users_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_access_update_users_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_access_update_users_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_columns = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_columns';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_columns_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_columns_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_columns_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_columns_Update>;
};

export type PayloadQueryPresetsDocAccessFields_columns_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_columns_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_columns_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_columns_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_columns_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_columns_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_columns_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_columns_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_createdAt = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_createdAt';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_createdAt_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_createdAt_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_createdAt_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_createdAt_Update>;
};

export type PayloadQueryPresetsDocAccessFields_createdAt_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_createdAt_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_createdAt_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_createdAt_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_groupBy = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_groupBy';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_groupBy_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_groupBy_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_groupBy_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_groupBy_Update>;
};

export type PayloadQueryPresetsDocAccessFields_groupBy_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_groupBy_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_groupBy_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_groupBy_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_groupBy_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_groupBy_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_groupBy_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_groupBy_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_isShared = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isShared';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_isShared_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_isShared_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_isShared_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_isShared_Update>;
};

export type PayloadQueryPresetsDocAccessFields_isShared_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isShared_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_isShared_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isShared_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_isShared_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isShared_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_isShared_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isShared_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_isTemp = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isTemp';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_isTemp_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_isTemp_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_isTemp_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_isTemp_Update>;
};

export type PayloadQueryPresetsDocAccessFields_isTemp_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isTemp_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_isTemp_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isTemp_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_isTemp_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isTemp_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_isTemp_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_isTemp_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_relatedCollection = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_relatedCollection';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_relatedCollection_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_relatedCollection_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_relatedCollection_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_relatedCollection_Update>;
};

export type PayloadQueryPresetsDocAccessFields_relatedCollection_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_relatedCollection_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_relatedCollection_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_relatedCollection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_relatedCollection_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_relatedCollection_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_relatedCollection_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_relatedCollection_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_title = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_title';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_title_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_title_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_title_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_title_Update>;
};

export type PayloadQueryPresetsDocAccessFields_title_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_title_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_title_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_title_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_updatedAt = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_updatedAt';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_updatedAt_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_updatedAt_Update>;
};

export type PayloadQueryPresetsDocAccessFields_updatedAt_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_updatedAt_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_updatedAt_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_updatedAt_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_where = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_where';
  create?: Maybe<PayloadQueryPresetsDocAccessFields_where_Create>;
  delete?: Maybe<PayloadQueryPresetsDocAccessFields_where_Delete>;
  read?: Maybe<PayloadQueryPresetsDocAccessFields_where_Read>;
  update?: Maybe<PayloadQueryPresetsDocAccessFields_where_Update>;
};

export type PayloadQueryPresetsDocAccessFields_where_Create = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_where_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_where_Delete = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_where_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_where_Read = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_where_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsDocAccessFields_where_Update = {
  __typename?: 'PayloadQueryPresetsDocAccessFields_where_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields = {
  __typename?: 'PayloadQueryPresetsFields';
  access?: Maybe<PayloadQueryPresetsFields_access>;
  columns?: Maybe<PayloadQueryPresetsFields_columns>;
  createdAt?: Maybe<PayloadQueryPresetsFields_createdAt>;
  groupBy?: Maybe<PayloadQueryPresetsFields_groupBy>;
  isShared?: Maybe<PayloadQueryPresetsFields_isShared>;
  isTemp?: Maybe<PayloadQueryPresetsFields_isTemp>;
  relatedCollection?: Maybe<PayloadQueryPresetsFields_relatedCollection>;
  title?: Maybe<PayloadQueryPresetsFields_title>;
  updatedAt?: Maybe<PayloadQueryPresetsFields_updatedAt>;
  where?: Maybe<PayloadQueryPresetsFields_where>;
};

export type PayloadQueryPresetsFields_access = {
  __typename?: 'PayloadQueryPresetsFields_access';
  create?: Maybe<PayloadQueryPresetsFields_access_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_Delete>;
  fields?: Maybe<PayloadQueryPresetsFields_access_Fields>;
  read?: Maybe<PayloadQueryPresetsFields_access_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_Update>;
};

export type PayloadQueryPresetsFields_access_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_Fields = {
  __typename?: 'PayloadQueryPresetsFields_access_Fields';
  delete?: Maybe<PayloadQueryPresetsFields_access_delete>;
  read?: Maybe<PayloadQueryPresetsFields_access_read>;
  update?: Maybe<PayloadQueryPresetsFields_access_update>;
};

export type PayloadQueryPresetsFields_access_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete = {
  __typename?: 'PayloadQueryPresetsFields_access_delete';
  create?: Maybe<PayloadQueryPresetsFields_access_delete_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_delete_Delete>;
  fields?: Maybe<PayloadQueryPresetsFields_access_delete_Fields>;
  read?: Maybe<PayloadQueryPresetsFields_access_delete_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_delete_Update>;
};

export type PayloadQueryPresetsFields_access_delete_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_Fields = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_Fields';
  constraint?: Maybe<PayloadQueryPresetsFields_access_delete_constraint>;
  users?: Maybe<PayloadQueryPresetsFields_access_delete_users>;
};

export type PayloadQueryPresetsFields_access_delete_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_constraint = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_constraint';
  create?: Maybe<PayloadQueryPresetsFields_access_delete_constraint_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_delete_constraint_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_access_delete_constraint_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_delete_constraint_Update>;
};

export type PayloadQueryPresetsFields_access_delete_constraint_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_constraint_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_constraint_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_constraint_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_constraint_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_constraint_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_constraint_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_constraint_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_users = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_users';
  create?: Maybe<PayloadQueryPresetsFields_access_delete_users_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_delete_users_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_access_delete_users_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_delete_users_Update>;
};

export type PayloadQueryPresetsFields_access_delete_users_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_users_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_users_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_users_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_users_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_users_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_delete_users_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_delete_users_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read = {
  __typename?: 'PayloadQueryPresetsFields_access_read';
  create?: Maybe<PayloadQueryPresetsFields_access_read_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_read_Delete>;
  fields?: Maybe<PayloadQueryPresetsFields_access_read_Fields>;
  read?: Maybe<PayloadQueryPresetsFields_access_read_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_read_Update>;
};

export type PayloadQueryPresetsFields_access_read_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_read_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_read_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_Fields = {
  __typename?: 'PayloadQueryPresetsFields_access_read_Fields';
  constraint?: Maybe<PayloadQueryPresetsFields_access_read_constraint>;
  users?: Maybe<PayloadQueryPresetsFields_access_read_users>;
};

export type PayloadQueryPresetsFields_access_read_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_read_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_read_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_constraint = {
  __typename?: 'PayloadQueryPresetsFields_access_read_constraint';
  create?: Maybe<PayloadQueryPresetsFields_access_read_constraint_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_read_constraint_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_access_read_constraint_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_read_constraint_Update>;
};

export type PayloadQueryPresetsFields_access_read_constraint_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_read_constraint_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_constraint_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_read_constraint_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_constraint_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_read_constraint_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_constraint_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_read_constraint_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_users = {
  __typename?: 'PayloadQueryPresetsFields_access_read_users';
  create?: Maybe<PayloadQueryPresetsFields_access_read_users_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_read_users_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_access_read_users_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_read_users_Update>;
};

export type PayloadQueryPresetsFields_access_read_users_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_read_users_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_users_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_read_users_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_users_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_read_users_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_read_users_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_read_users_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update = {
  __typename?: 'PayloadQueryPresetsFields_access_update';
  create?: Maybe<PayloadQueryPresetsFields_access_update_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_update_Delete>;
  fields?: Maybe<PayloadQueryPresetsFields_access_update_Fields>;
  read?: Maybe<PayloadQueryPresetsFields_access_update_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_update_Update>;
};

export type PayloadQueryPresetsFields_access_update_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_update_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_update_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_Fields = {
  __typename?: 'PayloadQueryPresetsFields_access_update_Fields';
  constraint?: Maybe<PayloadQueryPresetsFields_access_update_constraint>;
  users?: Maybe<PayloadQueryPresetsFields_access_update_users>;
};

export type PayloadQueryPresetsFields_access_update_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_update_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_update_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_constraint = {
  __typename?: 'PayloadQueryPresetsFields_access_update_constraint';
  create?: Maybe<PayloadQueryPresetsFields_access_update_constraint_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_update_constraint_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_access_update_constraint_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_update_constraint_Update>;
};

export type PayloadQueryPresetsFields_access_update_constraint_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_update_constraint_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_constraint_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_update_constraint_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_constraint_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_update_constraint_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_constraint_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_update_constraint_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_users = {
  __typename?: 'PayloadQueryPresetsFields_access_update_users';
  create?: Maybe<PayloadQueryPresetsFields_access_update_users_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_access_update_users_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_access_update_users_Read>;
  update?: Maybe<PayloadQueryPresetsFields_access_update_users_Update>;
};

export type PayloadQueryPresetsFields_access_update_users_Create = {
  __typename?: 'PayloadQueryPresetsFields_access_update_users_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_users_Delete = {
  __typename?: 'PayloadQueryPresetsFields_access_update_users_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_users_Read = {
  __typename?: 'PayloadQueryPresetsFields_access_update_users_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_access_update_users_Update = {
  __typename?: 'PayloadQueryPresetsFields_access_update_users_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_columns = {
  __typename?: 'PayloadQueryPresetsFields_columns';
  create?: Maybe<PayloadQueryPresetsFields_columns_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_columns_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_columns_Read>;
  update?: Maybe<PayloadQueryPresetsFields_columns_Update>;
};

export type PayloadQueryPresetsFields_columns_Create = {
  __typename?: 'PayloadQueryPresetsFields_columns_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_columns_Delete = {
  __typename?: 'PayloadQueryPresetsFields_columns_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_columns_Read = {
  __typename?: 'PayloadQueryPresetsFields_columns_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_columns_Update = {
  __typename?: 'PayloadQueryPresetsFields_columns_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_createdAt = {
  __typename?: 'PayloadQueryPresetsFields_createdAt';
  create?: Maybe<PayloadQueryPresetsFields_createdAt_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_createdAt_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_createdAt_Read>;
  update?: Maybe<PayloadQueryPresetsFields_createdAt_Update>;
};

export type PayloadQueryPresetsFields_createdAt_Create = {
  __typename?: 'PayloadQueryPresetsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_createdAt_Delete = {
  __typename?: 'PayloadQueryPresetsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_createdAt_Read = {
  __typename?: 'PayloadQueryPresetsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_createdAt_Update = {
  __typename?: 'PayloadQueryPresetsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_groupBy = {
  __typename?: 'PayloadQueryPresetsFields_groupBy';
  create?: Maybe<PayloadQueryPresetsFields_groupBy_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_groupBy_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_groupBy_Read>;
  update?: Maybe<PayloadQueryPresetsFields_groupBy_Update>;
};

export type PayloadQueryPresetsFields_groupBy_Create = {
  __typename?: 'PayloadQueryPresetsFields_groupBy_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_groupBy_Delete = {
  __typename?: 'PayloadQueryPresetsFields_groupBy_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_groupBy_Read = {
  __typename?: 'PayloadQueryPresetsFields_groupBy_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_groupBy_Update = {
  __typename?: 'PayloadQueryPresetsFields_groupBy_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_isShared = {
  __typename?: 'PayloadQueryPresetsFields_isShared';
  create?: Maybe<PayloadQueryPresetsFields_isShared_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_isShared_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_isShared_Read>;
  update?: Maybe<PayloadQueryPresetsFields_isShared_Update>;
};

export type PayloadQueryPresetsFields_isShared_Create = {
  __typename?: 'PayloadQueryPresetsFields_isShared_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_isShared_Delete = {
  __typename?: 'PayloadQueryPresetsFields_isShared_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_isShared_Read = {
  __typename?: 'PayloadQueryPresetsFields_isShared_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_isShared_Update = {
  __typename?: 'PayloadQueryPresetsFields_isShared_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_isTemp = {
  __typename?: 'PayloadQueryPresetsFields_isTemp';
  create?: Maybe<PayloadQueryPresetsFields_isTemp_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_isTemp_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_isTemp_Read>;
  update?: Maybe<PayloadQueryPresetsFields_isTemp_Update>;
};

export type PayloadQueryPresetsFields_isTemp_Create = {
  __typename?: 'PayloadQueryPresetsFields_isTemp_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_isTemp_Delete = {
  __typename?: 'PayloadQueryPresetsFields_isTemp_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_isTemp_Read = {
  __typename?: 'PayloadQueryPresetsFields_isTemp_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_isTemp_Update = {
  __typename?: 'PayloadQueryPresetsFields_isTemp_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_relatedCollection = {
  __typename?: 'PayloadQueryPresetsFields_relatedCollection';
  create?: Maybe<PayloadQueryPresetsFields_relatedCollection_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_relatedCollection_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_relatedCollection_Read>;
  update?: Maybe<PayloadQueryPresetsFields_relatedCollection_Update>;
};

export type PayloadQueryPresetsFields_relatedCollection_Create = {
  __typename?: 'PayloadQueryPresetsFields_relatedCollection_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_relatedCollection_Delete = {
  __typename?: 'PayloadQueryPresetsFields_relatedCollection_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_relatedCollection_Read = {
  __typename?: 'PayloadQueryPresetsFields_relatedCollection_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_relatedCollection_Update = {
  __typename?: 'PayloadQueryPresetsFields_relatedCollection_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_title = {
  __typename?: 'PayloadQueryPresetsFields_title';
  create?: Maybe<PayloadQueryPresetsFields_title_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_title_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_title_Read>;
  update?: Maybe<PayloadQueryPresetsFields_title_Update>;
};

export type PayloadQueryPresetsFields_title_Create = {
  __typename?: 'PayloadQueryPresetsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_title_Delete = {
  __typename?: 'PayloadQueryPresetsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_title_Read = {
  __typename?: 'PayloadQueryPresetsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_title_Update = {
  __typename?: 'PayloadQueryPresetsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_updatedAt = {
  __typename?: 'PayloadQueryPresetsFields_updatedAt';
  create?: Maybe<PayloadQueryPresetsFields_updatedAt_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_updatedAt_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_updatedAt_Read>;
  update?: Maybe<PayloadQueryPresetsFields_updatedAt_Update>;
};

export type PayloadQueryPresetsFields_updatedAt_Create = {
  __typename?: 'PayloadQueryPresetsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_updatedAt_Delete = {
  __typename?: 'PayloadQueryPresetsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_updatedAt_Read = {
  __typename?: 'PayloadQueryPresetsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_updatedAt_Update = {
  __typename?: 'PayloadQueryPresetsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_where = {
  __typename?: 'PayloadQueryPresetsFields_where';
  create?: Maybe<PayloadQueryPresetsFields_where_Create>;
  delete?: Maybe<PayloadQueryPresetsFields_where_Delete>;
  read?: Maybe<PayloadQueryPresetsFields_where_Read>;
  update?: Maybe<PayloadQueryPresetsFields_where_Update>;
};

export type PayloadQueryPresetsFields_where_Create = {
  __typename?: 'PayloadQueryPresetsFields_where_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_where_Delete = {
  __typename?: 'PayloadQueryPresetsFields_where_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_where_Read = {
  __typename?: 'PayloadQueryPresetsFields_where_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsFields_where_Update = {
  __typename?: 'PayloadQueryPresetsFields_where_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadQueryPresetsReadAccess = {
  __typename?: 'PayloadQueryPresetsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadQueryPresetsReadDocAccess = {
  __typename?: 'PayloadQueryPresetsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadQueryPresetsUpdateAccess = {
  __typename?: 'PayloadQueryPresetsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadQueryPresetsUpdateDocAccess = {
  __typename?: 'PayloadQueryPresetsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Post = {
  __typename?: 'Post';
  _status?: Maybe<Post__status>;
  authorSlug?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Array<Author>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featuredImage?: Maybe<Media>;
  id: Scalars['String']['output'];
  meta?: Maybe<Post_Meta>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  relatedPosts?: Maybe<Array<Post>>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostauthorsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type PostfeaturedImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type PostrelatedPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type PosttagsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum PostUpdate__status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type PostVersion = {
  __typename?: 'PostVersion';
  autosave?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Post>;
  publishedLocale?: Maybe<PostVersion_publishedLocale>;
  snapshot?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<PostVersion_Version>;
};


export type PostVersionparentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PostVersion_Version = {
  __typename?: 'PostVersion_Version';
  _status?: Maybe<PostVersion_Version__status>;
  authorSlug?: Maybe<Scalars['String']['output']>;
  authors?: Maybe<Array<Author>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featuredImage?: Maybe<Media>;
  meta?: Maybe<PostVersion_Version_Meta>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  relatedPosts?: Maybe<Array<Post>>;
  slug?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostVersion_VersionauthorsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type PostVersion_VersionfeaturedImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type PostVersion_VersionrelatedPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type PostVersion_VersiontagsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PostVersion_Version_Meta = {
  __typename?: 'PostVersion_Version_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  nofollow?: Maybe<Scalars['Boolean']['output']>;
  noindex?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type PostVersion_Version_MetaimageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum PostVersion_Version__status {
  Draft = 'draft',
  Published = 'published'
}

export enum PostVersion_publishedLocale {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export type Post_Meta = {
  __typename?: 'Post_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  nofollow?: Maybe<Scalars['Boolean']['output']>;
  noindex?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


export type Post_MetaimageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum Post__status {
  Draft = 'draft',
  Published = 'published'
}

export enum Post__status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Post__status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Post__status_operator = {
  all?: InputMaybe<Array<InputMaybe<Post__status_Input>>>;
  equals?: InputMaybe<Post__status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Post__status_Input>>>;
  not_equals?: InputMaybe<Post__status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Post__status_Input>>>;
};

export type Post_authorSlug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_authors_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_content_operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Post_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_featuredImage_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_meta__description_operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Post_meta__image_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_meta__nofollow_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Post_meta__noindex_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Post_meta__title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_publishedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_relatedPosts_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_slug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_subtitle_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_tags_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Post_title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_where = {
  AND?: InputMaybe<Array<InputMaybe<Post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_where_or>>>;
  _status?: InputMaybe<Post__status_operator>;
  authorSlug?: InputMaybe<Post_authorSlug_operator>;
  authors?: InputMaybe<Post_authors_operator>;
  content?: InputMaybe<Post_content_operator>;
  createdAt?: InputMaybe<Post_createdAt_operator>;
  featuredImage?: InputMaybe<Post_featuredImage_operator>;
  id?: InputMaybe<Post_id_operator>;
  meta__description?: InputMaybe<Post_meta__description_operator>;
  meta__image?: InputMaybe<Post_meta__image_operator>;
  meta__nofollow?: InputMaybe<Post_meta__nofollow_operator>;
  meta__noindex?: InputMaybe<Post_meta__noindex_operator>;
  meta__title?: InputMaybe<Post_meta__title_operator>;
  publishedAt?: InputMaybe<Post_publishedAt_operator>;
  relatedPosts?: InputMaybe<Post_relatedPosts_operator>;
  slug?: InputMaybe<Post_slug_operator>;
  subtitle?: InputMaybe<Post_subtitle_operator>;
  tags?: InputMaybe<Post_tags_operator>;
  title?: InputMaybe<Post_title_operator>;
  updatedAt?: InputMaybe<Post_updatedAt_operator>;
};

export type Post_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_where_or>>>;
  _status?: InputMaybe<Post__status_operator>;
  authorSlug?: InputMaybe<Post_authorSlug_operator>;
  authors?: InputMaybe<Post_authors_operator>;
  content?: InputMaybe<Post_content_operator>;
  createdAt?: InputMaybe<Post_createdAt_operator>;
  featuredImage?: InputMaybe<Post_featuredImage_operator>;
  id?: InputMaybe<Post_id_operator>;
  meta__description?: InputMaybe<Post_meta__description_operator>;
  meta__image?: InputMaybe<Post_meta__image_operator>;
  meta__nofollow?: InputMaybe<Post_meta__nofollow_operator>;
  meta__noindex?: InputMaybe<Post_meta__noindex_operator>;
  meta__title?: InputMaybe<Post_meta__title_operator>;
  publishedAt?: InputMaybe<Post_publishedAt_operator>;
  relatedPosts?: InputMaybe<Post_relatedPosts_operator>;
  slug?: InputMaybe<Post_slug_operator>;
  subtitle?: InputMaybe<Post_subtitle_operator>;
  tags?: InputMaybe<Post_tags_operator>;
  title?: InputMaybe<Post_title_operator>;
  updatedAt?: InputMaybe<Post_updatedAt_operator>;
};

export type Post_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_where_or>>>;
  _status?: InputMaybe<Post__status_operator>;
  authorSlug?: InputMaybe<Post_authorSlug_operator>;
  authors?: InputMaybe<Post_authors_operator>;
  content?: InputMaybe<Post_content_operator>;
  createdAt?: InputMaybe<Post_createdAt_operator>;
  featuredImage?: InputMaybe<Post_featuredImage_operator>;
  id?: InputMaybe<Post_id_operator>;
  meta__description?: InputMaybe<Post_meta__description_operator>;
  meta__image?: InputMaybe<Post_meta__image_operator>;
  meta__nofollow?: InputMaybe<Post_meta__nofollow_operator>;
  meta__noindex?: InputMaybe<Post_meta__noindex_operator>;
  meta__title?: InputMaybe<Post_meta__title_operator>;
  publishedAt?: InputMaybe<Post_publishedAt_operator>;
  relatedPosts?: InputMaybe<Post_relatedPosts_operator>;
  slug?: InputMaybe<Post_slug_operator>;
  subtitle?: InputMaybe<Post_subtitle_operator>;
  tags?: InputMaybe<Post_tags_operator>;
  title?: InputMaybe<Post_title_operator>;
  updatedAt?: InputMaybe<Post_updatedAt_operator>;
};

export type Posts = {
  __typename?: 'Posts';
  docs: Array<Post>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PostsCreateAccess = {
  __typename?: 'PostsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsCreateDocAccess = {
  __typename?: 'PostsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDeleteAccess = {
  __typename?: 'PostsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDeleteDocAccess = {
  __typename?: 'PostsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDocAccessFields = {
  __typename?: 'PostsDocAccessFields';
  _status?: Maybe<PostsDocAccessFields__status>;
  authorSlug?: Maybe<PostsDocAccessFields_authorSlug>;
  authors?: Maybe<PostsDocAccessFields_authors>;
  content?: Maybe<PostsDocAccessFields_content>;
  createdAt?: Maybe<PostsDocAccessFields_createdAt>;
  featuredImage?: Maybe<PostsDocAccessFields_featuredImage>;
  meta?: Maybe<PostsDocAccessFields_meta>;
  publishedAt?: Maybe<PostsDocAccessFields_publishedAt>;
  relatedPosts?: Maybe<PostsDocAccessFields_relatedPosts>;
  slug?: Maybe<PostsDocAccessFields_slug>;
  subtitle?: Maybe<PostsDocAccessFields_subtitle>;
  tags?: Maybe<PostsDocAccessFields_tags>;
  title?: Maybe<PostsDocAccessFields_title>;
  updatedAt?: Maybe<PostsDocAccessFields_updatedAt>;
};

export type PostsDocAccessFields__status = {
  __typename?: 'PostsDocAccessFields__status';
  create?: Maybe<PostsDocAccessFields__status_Create>;
  delete?: Maybe<PostsDocAccessFields__status_Delete>;
  read?: Maybe<PostsDocAccessFields__status_Read>;
  update?: Maybe<PostsDocAccessFields__status_Update>;
};

export type PostsDocAccessFields__status_Create = {
  __typename?: 'PostsDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields__status_Delete = {
  __typename?: 'PostsDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields__status_Read = {
  __typename?: 'PostsDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields__status_Update = {
  __typename?: 'PostsDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_authorSlug = {
  __typename?: 'PostsDocAccessFields_authorSlug';
  create?: Maybe<PostsDocAccessFields_authorSlug_Create>;
  delete?: Maybe<PostsDocAccessFields_authorSlug_Delete>;
  read?: Maybe<PostsDocAccessFields_authorSlug_Read>;
  update?: Maybe<PostsDocAccessFields_authorSlug_Update>;
};

export type PostsDocAccessFields_authorSlug_Create = {
  __typename?: 'PostsDocAccessFields_authorSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_authorSlug_Delete = {
  __typename?: 'PostsDocAccessFields_authorSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_authorSlug_Read = {
  __typename?: 'PostsDocAccessFields_authorSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_authorSlug_Update = {
  __typename?: 'PostsDocAccessFields_authorSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_authors = {
  __typename?: 'PostsDocAccessFields_authors';
  create?: Maybe<PostsDocAccessFields_authors_Create>;
  delete?: Maybe<PostsDocAccessFields_authors_Delete>;
  read?: Maybe<PostsDocAccessFields_authors_Read>;
  update?: Maybe<PostsDocAccessFields_authors_Update>;
};

export type PostsDocAccessFields_authors_Create = {
  __typename?: 'PostsDocAccessFields_authors_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_authors_Delete = {
  __typename?: 'PostsDocAccessFields_authors_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_authors_Read = {
  __typename?: 'PostsDocAccessFields_authors_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_authors_Update = {
  __typename?: 'PostsDocAccessFields_authors_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_content = {
  __typename?: 'PostsDocAccessFields_content';
  create?: Maybe<PostsDocAccessFields_content_Create>;
  delete?: Maybe<PostsDocAccessFields_content_Delete>;
  read?: Maybe<PostsDocAccessFields_content_Read>;
  update?: Maybe<PostsDocAccessFields_content_Update>;
};

export type PostsDocAccessFields_content_Create = {
  __typename?: 'PostsDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_content_Delete = {
  __typename?: 'PostsDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_content_Read = {
  __typename?: 'PostsDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_content_Update = {
  __typename?: 'PostsDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_createdAt = {
  __typename?: 'PostsDocAccessFields_createdAt';
  create?: Maybe<PostsDocAccessFields_createdAt_Create>;
  delete?: Maybe<PostsDocAccessFields_createdAt_Delete>;
  read?: Maybe<PostsDocAccessFields_createdAt_Read>;
  update?: Maybe<PostsDocAccessFields_createdAt_Update>;
};

export type PostsDocAccessFields_createdAt_Create = {
  __typename?: 'PostsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_createdAt_Delete = {
  __typename?: 'PostsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_createdAt_Read = {
  __typename?: 'PostsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_createdAt_Update = {
  __typename?: 'PostsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_featuredImage = {
  __typename?: 'PostsDocAccessFields_featuredImage';
  create?: Maybe<PostsDocAccessFields_featuredImage_Create>;
  delete?: Maybe<PostsDocAccessFields_featuredImage_Delete>;
  read?: Maybe<PostsDocAccessFields_featuredImage_Read>;
  update?: Maybe<PostsDocAccessFields_featuredImage_Update>;
};

export type PostsDocAccessFields_featuredImage_Create = {
  __typename?: 'PostsDocAccessFields_featuredImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_featuredImage_Delete = {
  __typename?: 'PostsDocAccessFields_featuredImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_featuredImage_Read = {
  __typename?: 'PostsDocAccessFields_featuredImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_featuredImage_Update = {
  __typename?: 'PostsDocAccessFields_featuredImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta = {
  __typename?: 'PostsDocAccessFields_meta';
  description?: Maybe<PostsDocAccessFields_meta_description>;
  image?: Maybe<PostsDocAccessFields_meta_image>;
  nofollow?: Maybe<PostsDocAccessFields_meta_nofollow>;
  noindex?: Maybe<PostsDocAccessFields_meta_noindex>;
  title?: Maybe<PostsDocAccessFields_meta_title>;
};

export type PostsDocAccessFields_meta_description = {
  __typename?: 'PostsDocAccessFields_meta_description';
  create?: Maybe<PostsDocAccessFields_meta_description_Create>;
  delete?: Maybe<PostsDocAccessFields_meta_description_Delete>;
  read?: Maybe<PostsDocAccessFields_meta_description_Read>;
  update?: Maybe<PostsDocAccessFields_meta_description_Update>;
};

export type PostsDocAccessFields_meta_description_Create = {
  __typename?: 'PostsDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_description_Delete = {
  __typename?: 'PostsDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_description_Read = {
  __typename?: 'PostsDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_description_Update = {
  __typename?: 'PostsDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_image = {
  __typename?: 'PostsDocAccessFields_meta_image';
  create?: Maybe<PostsDocAccessFields_meta_image_Create>;
  delete?: Maybe<PostsDocAccessFields_meta_image_Delete>;
  read?: Maybe<PostsDocAccessFields_meta_image_Read>;
  update?: Maybe<PostsDocAccessFields_meta_image_Update>;
};

export type PostsDocAccessFields_meta_image_Create = {
  __typename?: 'PostsDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_image_Delete = {
  __typename?: 'PostsDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_image_Read = {
  __typename?: 'PostsDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_image_Update = {
  __typename?: 'PostsDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_nofollow = {
  __typename?: 'PostsDocAccessFields_meta_nofollow';
  create?: Maybe<PostsDocAccessFields_meta_nofollow_Create>;
  delete?: Maybe<PostsDocAccessFields_meta_nofollow_Delete>;
  read?: Maybe<PostsDocAccessFields_meta_nofollow_Read>;
  update?: Maybe<PostsDocAccessFields_meta_nofollow_Update>;
};

export type PostsDocAccessFields_meta_nofollow_Create = {
  __typename?: 'PostsDocAccessFields_meta_nofollow_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_nofollow_Delete = {
  __typename?: 'PostsDocAccessFields_meta_nofollow_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_nofollow_Read = {
  __typename?: 'PostsDocAccessFields_meta_nofollow_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_nofollow_Update = {
  __typename?: 'PostsDocAccessFields_meta_nofollow_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_noindex = {
  __typename?: 'PostsDocAccessFields_meta_noindex';
  create?: Maybe<PostsDocAccessFields_meta_noindex_Create>;
  delete?: Maybe<PostsDocAccessFields_meta_noindex_Delete>;
  read?: Maybe<PostsDocAccessFields_meta_noindex_Read>;
  update?: Maybe<PostsDocAccessFields_meta_noindex_Update>;
};

export type PostsDocAccessFields_meta_noindex_Create = {
  __typename?: 'PostsDocAccessFields_meta_noindex_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_noindex_Delete = {
  __typename?: 'PostsDocAccessFields_meta_noindex_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_noindex_Read = {
  __typename?: 'PostsDocAccessFields_meta_noindex_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_noindex_Update = {
  __typename?: 'PostsDocAccessFields_meta_noindex_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_title = {
  __typename?: 'PostsDocAccessFields_meta_title';
  create?: Maybe<PostsDocAccessFields_meta_title_Create>;
  delete?: Maybe<PostsDocAccessFields_meta_title_Delete>;
  read?: Maybe<PostsDocAccessFields_meta_title_Read>;
  update?: Maybe<PostsDocAccessFields_meta_title_Update>;
};

export type PostsDocAccessFields_meta_title_Create = {
  __typename?: 'PostsDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_title_Delete = {
  __typename?: 'PostsDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_title_Read = {
  __typename?: 'PostsDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_meta_title_Update = {
  __typename?: 'PostsDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_publishedAt = {
  __typename?: 'PostsDocAccessFields_publishedAt';
  create?: Maybe<PostsDocAccessFields_publishedAt_Create>;
  delete?: Maybe<PostsDocAccessFields_publishedAt_Delete>;
  read?: Maybe<PostsDocAccessFields_publishedAt_Read>;
  update?: Maybe<PostsDocAccessFields_publishedAt_Update>;
};

export type PostsDocAccessFields_publishedAt_Create = {
  __typename?: 'PostsDocAccessFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_publishedAt_Delete = {
  __typename?: 'PostsDocAccessFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_publishedAt_Read = {
  __typename?: 'PostsDocAccessFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_publishedAt_Update = {
  __typename?: 'PostsDocAccessFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_relatedPosts = {
  __typename?: 'PostsDocAccessFields_relatedPosts';
  create?: Maybe<PostsDocAccessFields_relatedPosts_Create>;
  delete?: Maybe<PostsDocAccessFields_relatedPosts_Delete>;
  read?: Maybe<PostsDocAccessFields_relatedPosts_Read>;
  update?: Maybe<PostsDocAccessFields_relatedPosts_Update>;
};

export type PostsDocAccessFields_relatedPosts_Create = {
  __typename?: 'PostsDocAccessFields_relatedPosts_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_relatedPosts_Delete = {
  __typename?: 'PostsDocAccessFields_relatedPosts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_relatedPosts_Read = {
  __typename?: 'PostsDocAccessFields_relatedPosts_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_relatedPosts_Update = {
  __typename?: 'PostsDocAccessFields_relatedPosts_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_slug = {
  __typename?: 'PostsDocAccessFields_slug';
  create?: Maybe<PostsDocAccessFields_slug_Create>;
  delete?: Maybe<PostsDocAccessFields_slug_Delete>;
  read?: Maybe<PostsDocAccessFields_slug_Read>;
  update?: Maybe<PostsDocAccessFields_slug_Update>;
};

export type PostsDocAccessFields_slug_Create = {
  __typename?: 'PostsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_slug_Delete = {
  __typename?: 'PostsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_slug_Read = {
  __typename?: 'PostsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_slug_Update = {
  __typename?: 'PostsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_subtitle = {
  __typename?: 'PostsDocAccessFields_subtitle';
  create?: Maybe<PostsDocAccessFields_subtitle_Create>;
  delete?: Maybe<PostsDocAccessFields_subtitle_Delete>;
  read?: Maybe<PostsDocAccessFields_subtitle_Read>;
  update?: Maybe<PostsDocAccessFields_subtitle_Update>;
};

export type PostsDocAccessFields_subtitle_Create = {
  __typename?: 'PostsDocAccessFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_subtitle_Delete = {
  __typename?: 'PostsDocAccessFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_subtitle_Read = {
  __typename?: 'PostsDocAccessFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_subtitle_Update = {
  __typename?: 'PostsDocAccessFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_tags = {
  __typename?: 'PostsDocAccessFields_tags';
  create?: Maybe<PostsDocAccessFields_tags_Create>;
  delete?: Maybe<PostsDocAccessFields_tags_Delete>;
  read?: Maybe<PostsDocAccessFields_tags_Read>;
  update?: Maybe<PostsDocAccessFields_tags_Update>;
};

export type PostsDocAccessFields_tags_Create = {
  __typename?: 'PostsDocAccessFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_tags_Delete = {
  __typename?: 'PostsDocAccessFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_tags_Read = {
  __typename?: 'PostsDocAccessFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_tags_Update = {
  __typename?: 'PostsDocAccessFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_title = {
  __typename?: 'PostsDocAccessFields_title';
  create?: Maybe<PostsDocAccessFields_title_Create>;
  delete?: Maybe<PostsDocAccessFields_title_Delete>;
  read?: Maybe<PostsDocAccessFields_title_Read>;
  update?: Maybe<PostsDocAccessFields_title_Update>;
};

export type PostsDocAccessFields_title_Create = {
  __typename?: 'PostsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_title_Delete = {
  __typename?: 'PostsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_title_Read = {
  __typename?: 'PostsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_title_Update = {
  __typename?: 'PostsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_updatedAt = {
  __typename?: 'PostsDocAccessFields_updatedAt';
  create?: Maybe<PostsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PostsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PostsDocAccessFields_updatedAt_Read>;
  update?: Maybe<PostsDocAccessFields_updatedAt_Update>;
};

export type PostsDocAccessFields_updatedAt_Create = {
  __typename?: 'PostsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_updatedAt_Delete = {
  __typename?: 'PostsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_updatedAt_Read = {
  __typename?: 'PostsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_updatedAt_Update = {
  __typename?: 'PostsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields = {
  __typename?: 'PostsFields';
  _status?: Maybe<PostsFields__status>;
  authorSlug?: Maybe<PostsFields_authorSlug>;
  authors?: Maybe<PostsFields_authors>;
  content?: Maybe<PostsFields_content>;
  createdAt?: Maybe<PostsFields_createdAt>;
  featuredImage?: Maybe<PostsFields_featuredImage>;
  meta?: Maybe<PostsFields_meta>;
  publishedAt?: Maybe<PostsFields_publishedAt>;
  relatedPosts?: Maybe<PostsFields_relatedPosts>;
  slug?: Maybe<PostsFields_slug>;
  subtitle?: Maybe<PostsFields_subtitle>;
  tags?: Maybe<PostsFields_tags>;
  title?: Maybe<PostsFields_title>;
  updatedAt?: Maybe<PostsFields_updatedAt>;
};

export type PostsFields__status = {
  __typename?: 'PostsFields__status';
  create?: Maybe<PostsFields__status_Create>;
  delete?: Maybe<PostsFields__status_Delete>;
  read?: Maybe<PostsFields__status_Read>;
  update?: Maybe<PostsFields__status_Update>;
};

export type PostsFields__status_Create = {
  __typename?: 'PostsFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields__status_Delete = {
  __typename?: 'PostsFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields__status_Read = {
  __typename?: 'PostsFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields__status_Update = {
  __typename?: 'PostsFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_authorSlug = {
  __typename?: 'PostsFields_authorSlug';
  create?: Maybe<PostsFields_authorSlug_Create>;
  delete?: Maybe<PostsFields_authorSlug_Delete>;
  read?: Maybe<PostsFields_authorSlug_Read>;
  update?: Maybe<PostsFields_authorSlug_Update>;
};

export type PostsFields_authorSlug_Create = {
  __typename?: 'PostsFields_authorSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_authorSlug_Delete = {
  __typename?: 'PostsFields_authorSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_authorSlug_Read = {
  __typename?: 'PostsFields_authorSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_authorSlug_Update = {
  __typename?: 'PostsFields_authorSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_authors = {
  __typename?: 'PostsFields_authors';
  create?: Maybe<PostsFields_authors_Create>;
  delete?: Maybe<PostsFields_authors_Delete>;
  read?: Maybe<PostsFields_authors_Read>;
  update?: Maybe<PostsFields_authors_Update>;
};

export type PostsFields_authors_Create = {
  __typename?: 'PostsFields_authors_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_authors_Delete = {
  __typename?: 'PostsFields_authors_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_authors_Read = {
  __typename?: 'PostsFields_authors_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_authors_Update = {
  __typename?: 'PostsFields_authors_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_content = {
  __typename?: 'PostsFields_content';
  create?: Maybe<PostsFields_content_Create>;
  delete?: Maybe<PostsFields_content_Delete>;
  read?: Maybe<PostsFields_content_Read>;
  update?: Maybe<PostsFields_content_Update>;
};

export type PostsFields_content_Create = {
  __typename?: 'PostsFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_content_Delete = {
  __typename?: 'PostsFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_content_Read = {
  __typename?: 'PostsFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_content_Update = {
  __typename?: 'PostsFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_createdAt = {
  __typename?: 'PostsFields_createdAt';
  create?: Maybe<PostsFields_createdAt_Create>;
  delete?: Maybe<PostsFields_createdAt_Delete>;
  read?: Maybe<PostsFields_createdAt_Read>;
  update?: Maybe<PostsFields_createdAt_Update>;
};

export type PostsFields_createdAt_Create = {
  __typename?: 'PostsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_createdAt_Delete = {
  __typename?: 'PostsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_createdAt_Read = {
  __typename?: 'PostsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_createdAt_Update = {
  __typename?: 'PostsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_featuredImage = {
  __typename?: 'PostsFields_featuredImage';
  create?: Maybe<PostsFields_featuredImage_Create>;
  delete?: Maybe<PostsFields_featuredImage_Delete>;
  read?: Maybe<PostsFields_featuredImage_Read>;
  update?: Maybe<PostsFields_featuredImage_Update>;
};

export type PostsFields_featuredImage_Create = {
  __typename?: 'PostsFields_featuredImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_featuredImage_Delete = {
  __typename?: 'PostsFields_featuredImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_featuredImage_Read = {
  __typename?: 'PostsFields_featuredImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_featuredImage_Update = {
  __typename?: 'PostsFields_featuredImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta = {
  __typename?: 'PostsFields_meta';
  description?: Maybe<PostsFields_meta_description>;
  image?: Maybe<PostsFields_meta_image>;
  nofollow?: Maybe<PostsFields_meta_nofollow>;
  noindex?: Maybe<PostsFields_meta_noindex>;
  title?: Maybe<PostsFields_meta_title>;
};

export type PostsFields_meta_description = {
  __typename?: 'PostsFields_meta_description';
  create?: Maybe<PostsFields_meta_description_Create>;
  delete?: Maybe<PostsFields_meta_description_Delete>;
  read?: Maybe<PostsFields_meta_description_Read>;
  update?: Maybe<PostsFields_meta_description_Update>;
};

export type PostsFields_meta_description_Create = {
  __typename?: 'PostsFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_description_Delete = {
  __typename?: 'PostsFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_description_Read = {
  __typename?: 'PostsFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_description_Update = {
  __typename?: 'PostsFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_image = {
  __typename?: 'PostsFields_meta_image';
  create?: Maybe<PostsFields_meta_image_Create>;
  delete?: Maybe<PostsFields_meta_image_Delete>;
  read?: Maybe<PostsFields_meta_image_Read>;
  update?: Maybe<PostsFields_meta_image_Update>;
};

export type PostsFields_meta_image_Create = {
  __typename?: 'PostsFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_image_Delete = {
  __typename?: 'PostsFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_image_Read = {
  __typename?: 'PostsFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_image_Update = {
  __typename?: 'PostsFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_nofollow = {
  __typename?: 'PostsFields_meta_nofollow';
  create?: Maybe<PostsFields_meta_nofollow_Create>;
  delete?: Maybe<PostsFields_meta_nofollow_Delete>;
  read?: Maybe<PostsFields_meta_nofollow_Read>;
  update?: Maybe<PostsFields_meta_nofollow_Update>;
};

export type PostsFields_meta_nofollow_Create = {
  __typename?: 'PostsFields_meta_nofollow_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_nofollow_Delete = {
  __typename?: 'PostsFields_meta_nofollow_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_nofollow_Read = {
  __typename?: 'PostsFields_meta_nofollow_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_nofollow_Update = {
  __typename?: 'PostsFields_meta_nofollow_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_noindex = {
  __typename?: 'PostsFields_meta_noindex';
  create?: Maybe<PostsFields_meta_noindex_Create>;
  delete?: Maybe<PostsFields_meta_noindex_Delete>;
  read?: Maybe<PostsFields_meta_noindex_Read>;
  update?: Maybe<PostsFields_meta_noindex_Update>;
};

export type PostsFields_meta_noindex_Create = {
  __typename?: 'PostsFields_meta_noindex_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_noindex_Delete = {
  __typename?: 'PostsFields_meta_noindex_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_noindex_Read = {
  __typename?: 'PostsFields_meta_noindex_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_noindex_Update = {
  __typename?: 'PostsFields_meta_noindex_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_title = {
  __typename?: 'PostsFields_meta_title';
  create?: Maybe<PostsFields_meta_title_Create>;
  delete?: Maybe<PostsFields_meta_title_Delete>;
  read?: Maybe<PostsFields_meta_title_Read>;
  update?: Maybe<PostsFields_meta_title_Update>;
};

export type PostsFields_meta_title_Create = {
  __typename?: 'PostsFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_title_Delete = {
  __typename?: 'PostsFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_title_Read = {
  __typename?: 'PostsFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_meta_title_Update = {
  __typename?: 'PostsFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_publishedAt = {
  __typename?: 'PostsFields_publishedAt';
  create?: Maybe<PostsFields_publishedAt_Create>;
  delete?: Maybe<PostsFields_publishedAt_Delete>;
  read?: Maybe<PostsFields_publishedAt_Read>;
  update?: Maybe<PostsFields_publishedAt_Update>;
};

export type PostsFields_publishedAt_Create = {
  __typename?: 'PostsFields_publishedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_publishedAt_Delete = {
  __typename?: 'PostsFields_publishedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_publishedAt_Read = {
  __typename?: 'PostsFields_publishedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_publishedAt_Update = {
  __typename?: 'PostsFields_publishedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_relatedPosts = {
  __typename?: 'PostsFields_relatedPosts';
  create?: Maybe<PostsFields_relatedPosts_Create>;
  delete?: Maybe<PostsFields_relatedPosts_Delete>;
  read?: Maybe<PostsFields_relatedPosts_Read>;
  update?: Maybe<PostsFields_relatedPosts_Update>;
};

export type PostsFields_relatedPosts_Create = {
  __typename?: 'PostsFields_relatedPosts_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_relatedPosts_Delete = {
  __typename?: 'PostsFields_relatedPosts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_relatedPosts_Read = {
  __typename?: 'PostsFields_relatedPosts_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_relatedPosts_Update = {
  __typename?: 'PostsFields_relatedPosts_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_slug = {
  __typename?: 'PostsFields_slug';
  create?: Maybe<PostsFields_slug_Create>;
  delete?: Maybe<PostsFields_slug_Delete>;
  read?: Maybe<PostsFields_slug_Read>;
  update?: Maybe<PostsFields_slug_Update>;
};

export type PostsFields_slug_Create = {
  __typename?: 'PostsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_slug_Delete = {
  __typename?: 'PostsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_slug_Read = {
  __typename?: 'PostsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_slug_Update = {
  __typename?: 'PostsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_subtitle = {
  __typename?: 'PostsFields_subtitle';
  create?: Maybe<PostsFields_subtitle_Create>;
  delete?: Maybe<PostsFields_subtitle_Delete>;
  read?: Maybe<PostsFields_subtitle_Read>;
  update?: Maybe<PostsFields_subtitle_Update>;
};

export type PostsFields_subtitle_Create = {
  __typename?: 'PostsFields_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_subtitle_Delete = {
  __typename?: 'PostsFields_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_subtitle_Read = {
  __typename?: 'PostsFields_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_subtitle_Update = {
  __typename?: 'PostsFields_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_tags = {
  __typename?: 'PostsFields_tags';
  create?: Maybe<PostsFields_tags_Create>;
  delete?: Maybe<PostsFields_tags_Delete>;
  read?: Maybe<PostsFields_tags_Read>;
  update?: Maybe<PostsFields_tags_Update>;
};

export type PostsFields_tags_Create = {
  __typename?: 'PostsFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_tags_Delete = {
  __typename?: 'PostsFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_tags_Read = {
  __typename?: 'PostsFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_tags_Update = {
  __typename?: 'PostsFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_title = {
  __typename?: 'PostsFields_title';
  create?: Maybe<PostsFields_title_Create>;
  delete?: Maybe<PostsFields_title_Delete>;
  read?: Maybe<PostsFields_title_Read>;
  update?: Maybe<PostsFields_title_Update>;
};

export type PostsFields_title_Create = {
  __typename?: 'PostsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_title_Delete = {
  __typename?: 'PostsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_title_Read = {
  __typename?: 'PostsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_title_Update = {
  __typename?: 'PostsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_updatedAt = {
  __typename?: 'PostsFields_updatedAt';
  create?: Maybe<PostsFields_updatedAt_Create>;
  delete?: Maybe<PostsFields_updatedAt_Delete>;
  read?: Maybe<PostsFields_updatedAt_Read>;
  update?: Maybe<PostsFields_updatedAt_Update>;
};

export type PostsFields_updatedAt_Create = {
  __typename?: 'PostsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_updatedAt_Delete = {
  __typename?: 'PostsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_updatedAt_Read = {
  __typename?: 'PostsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_updatedAt_Update = {
  __typename?: 'PostsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsReadAccess = {
  __typename?: 'PostsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadDocAccess = {
  __typename?: 'PostsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadVersionsAccess = {
  __typename?: 'PostsReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadVersionsDocAccess = {
  __typename?: 'PostsReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsUpdateAccess = {
  __typename?: 'PostsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsUpdateDocAccess = {
  __typename?: 'PostsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Ai_call_log?: Maybe<Ai_call_log>;
  Ai_call_logs?: Maybe<Ai_call_logs>;
  Author?: Maybe<Author>;
  Authors?: Maybe<Authors>;
  Media?: Maybe<Media>;
  Micro_post?: Maybe<Micro_post>;
  Micro_post_external_link?: Maybe<Micro_post_external_link>;
  Micro_post_external_links?: Maybe<Micro_post_external_links>;
  Micro_posts?: Maybe<Micro_posts>;
  PayloadJob?: Maybe<PayloadJob>;
  PayloadJobs?: Maybe<PayloadJobs>;
  PayloadKv?: Maybe<PayloadKv>;
  PayloadKvs?: Maybe<PayloadKvs>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  PayloadQueryPreset?: Maybe<PayloadQueryPreset>;
  PayloadQueryPresets?: Maybe<PayloadQueryPresets>;
  Post?: Maybe<Post>;
  Posts?: Maybe<Posts>;
  Search?: Maybe<Search>;
  Searches?: Maybe<Searches>;
  Tag?: Maybe<Tag>;
  Tags?: Maybe<Tags>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<allMedia>;
  availableTagsByMicroPostType: Array<Tag>;
  countAi_call_logs?: Maybe<countAi_call_logs>;
  countAuthors?: Maybe<countAuthors>;
  countMicro_post_external_links?: Maybe<countMicro_post_external_links>;
  countMicro_posts?: Maybe<countMicro_posts>;
  countPayloadJobs?: Maybe<countPayloadJobs>;
  countPayloadKvs?: Maybe<countPayloadKvs>;
  countPayloadLockedDocuments?: Maybe<countPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<countPayloadPreferences>;
  countPayloadQueryPresets?: Maybe<countPayloadQueryPresets>;
  countPosts?: Maybe<countPosts>;
  countSearches?: Maybe<countSearches>;
  countTags?: Maybe<countTags>;
  countUsers?: Maybe<countUsers>;
  countallMedia?: Maybe<countallMedia>;
  docAccessAi_call_log?: Maybe<ai_call_logsDocAccess>;
  docAccessAuthor?: Maybe<authorsDocAccess>;
  docAccessMedia?: Maybe<mediaDocAccess>;
  docAccessMicro_post?: Maybe<micro_postsDocAccess>;
  docAccessMicro_post_external_link?: Maybe<micro_post_external_linksDocAccess>;
  docAccessPayloadJob?: Maybe<payload_jobsDocAccess>;
  docAccessPayloadKv?: Maybe<payload_kvDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<payload_locked_documentsDocAccess>;
  docAccessPayloadPreference?: Maybe<payload_preferencesDocAccess>;
  docAccessPayloadQueryPreset?: Maybe<payload_query_presetsDocAccess>;
  docAccessPost?: Maybe<postsDocAccess>;
  docAccessSearch?: Maybe<searchDocAccess>;
  docAccessTag?: Maybe<tagsDocAccess>;
  docAccessUser?: Maybe<usersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<usersMe>;
  versionMicro_post?: Maybe<Micro_postVersion>;
  versionPost?: Maybe<PostVersion>;
  versionsMicro_posts?: Maybe<versionsMicro_posts>;
  versionsPosts?: Maybe<versionsPosts>;
};


export type QueryAi_call_logArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAi_call_logsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Ai_call_log_where>;
};


export type QueryAuthorArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAuthorsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Author_where>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMicro_postArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMicro_post_external_linkArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMicro_post_external_linksArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Micro_post_external_link_where>;
};


export type QueryMicro_postsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Micro_post_where>;
};


export type QueryPayloadJobArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadJobsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadJob_where>;
};


export type QueryPayloadKvArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_where>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_where>;
};


export type QueryPayloadQueryPresetArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadQueryPresetsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadQueryPreset_where>;
};


export type QueryPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Post_where>;
};


export type QuerySearchArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySearchesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Search_where>;
};


export type QueryTagArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Tag_where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_where>;
};


export type QueryallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_where>;
};


export type QueryavailableTagsByMicroPostTypeArgs = {
  locale?: InputMaybe<LocaleInputType>;
  postType?: InputMaybe<Scalars['String']['input']>;
};


export type QuerycountAi_call_logsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Ai_call_log_where>;
};


export type QuerycountAuthorsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Author_where>;
};


export type QuerycountMicro_post_external_linksArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Micro_post_external_link_where>;
};


export type QuerycountMicro_postsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Micro_post_where>;
};


export type QuerycountPayloadJobsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadJob_where>;
};


export type QuerycountPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_where>;
};


export type QuerycountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_where>;
};


export type QuerycountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_where>;
};


export type QuerycountPayloadQueryPresetsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadQueryPreset_where>;
};


export type QuerycountPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Post_where>;
};


export type QuerycountSearchesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Search_where>;
};


export type QuerycountTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Tag_where>;
};


export type QuerycountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_where>;
};


export type QuerycountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_where>;
};


export type QuerydocAccessAi_call_logArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessAuthorArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessMicro_postArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessMicro_post_external_linkArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessPayloadJobArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessPayloadKvArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessPayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessPayloadQueryPresetArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessPostArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessSearchArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessTagArgs = {
  id: Scalars['String']['input'];
};


export type QuerydocAccessUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryversionMicro_postArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryversionPostArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryversionsMicro_postsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<versionsMicro_post_where>;
};


export type QueryversionsPostsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<versionsPost_where>;
};

export type Search = {
  __typename?: 'Search';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  doc: Search_Doc_Relationship;
  excerpt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  priority?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SearchdocArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type SearchCreateAccess = {
  __typename?: 'SearchCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SearchCreateDocAccess = {
  __typename?: 'SearchCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SearchDeleteAccess = {
  __typename?: 'SearchDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SearchDeleteDocAccess = {
  __typename?: 'SearchDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SearchDocAccessFields = {
  __typename?: 'SearchDocAccessFields';
  createdAt?: Maybe<SearchDocAccessFields_createdAt>;
  doc?: Maybe<SearchDocAccessFields_doc>;
  excerpt?: Maybe<SearchDocAccessFields_excerpt>;
  priority?: Maybe<SearchDocAccessFields_priority>;
  title?: Maybe<SearchDocAccessFields_title>;
  updatedAt?: Maybe<SearchDocAccessFields_updatedAt>;
};

export type SearchDocAccessFields_createdAt = {
  __typename?: 'SearchDocAccessFields_createdAt';
  create?: Maybe<SearchDocAccessFields_createdAt_Create>;
  delete?: Maybe<SearchDocAccessFields_createdAt_Delete>;
  read?: Maybe<SearchDocAccessFields_createdAt_Read>;
  update?: Maybe<SearchDocAccessFields_createdAt_Update>;
};

export type SearchDocAccessFields_createdAt_Create = {
  __typename?: 'SearchDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_createdAt_Delete = {
  __typename?: 'SearchDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_createdAt_Read = {
  __typename?: 'SearchDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_createdAt_Update = {
  __typename?: 'SearchDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_doc = {
  __typename?: 'SearchDocAccessFields_doc';
  create?: Maybe<SearchDocAccessFields_doc_Create>;
  delete?: Maybe<SearchDocAccessFields_doc_Delete>;
  read?: Maybe<SearchDocAccessFields_doc_Read>;
  update?: Maybe<SearchDocAccessFields_doc_Update>;
};

export type SearchDocAccessFields_doc_Create = {
  __typename?: 'SearchDocAccessFields_doc_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_doc_Delete = {
  __typename?: 'SearchDocAccessFields_doc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_doc_Read = {
  __typename?: 'SearchDocAccessFields_doc_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_doc_Update = {
  __typename?: 'SearchDocAccessFields_doc_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_excerpt = {
  __typename?: 'SearchDocAccessFields_excerpt';
  create?: Maybe<SearchDocAccessFields_excerpt_Create>;
  delete?: Maybe<SearchDocAccessFields_excerpt_Delete>;
  read?: Maybe<SearchDocAccessFields_excerpt_Read>;
  update?: Maybe<SearchDocAccessFields_excerpt_Update>;
};

export type SearchDocAccessFields_excerpt_Create = {
  __typename?: 'SearchDocAccessFields_excerpt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_excerpt_Delete = {
  __typename?: 'SearchDocAccessFields_excerpt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_excerpt_Read = {
  __typename?: 'SearchDocAccessFields_excerpt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_excerpt_Update = {
  __typename?: 'SearchDocAccessFields_excerpt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_priority = {
  __typename?: 'SearchDocAccessFields_priority';
  create?: Maybe<SearchDocAccessFields_priority_Create>;
  delete?: Maybe<SearchDocAccessFields_priority_Delete>;
  read?: Maybe<SearchDocAccessFields_priority_Read>;
  update?: Maybe<SearchDocAccessFields_priority_Update>;
};

export type SearchDocAccessFields_priority_Create = {
  __typename?: 'SearchDocAccessFields_priority_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_priority_Delete = {
  __typename?: 'SearchDocAccessFields_priority_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_priority_Read = {
  __typename?: 'SearchDocAccessFields_priority_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_priority_Update = {
  __typename?: 'SearchDocAccessFields_priority_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_title = {
  __typename?: 'SearchDocAccessFields_title';
  create?: Maybe<SearchDocAccessFields_title_Create>;
  delete?: Maybe<SearchDocAccessFields_title_Delete>;
  read?: Maybe<SearchDocAccessFields_title_Read>;
  update?: Maybe<SearchDocAccessFields_title_Update>;
};

export type SearchDocAccessFields_title_Create = {
  __typename?: 'SearchDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_title_Delete = {
  __typename?: 'SearchDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_title_Read = {
  __typename?: 'SearchDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_title_Update = {
  __typename?: 'SearchDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_updatedAt = {
  __typename?: 'SearchDocAccessFields_updatedAt';
  create?: Maybe<SearchDocAccessFields_updatedAt_Create>;
  delete?: Maybe<SearchDocAccessFields_updatedAt_Delete>;
  read?: Maybe<SearchDocAccessFields_updatedAt_Read>;
  update?: Maybe<SearchDocAccessFields_updatedAt_Update>;
};

export type SearchDocAccessFields_updatedAt_Create = {
  __typename?: 'SearchDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_updatedAt_Delete = {
  __typename?: 'SearchDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_updatedAt_Read = {
  __typename?: 'SearchDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchDocAccessFields_updatedAt_Update = {
  __typename?: 'SearchDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields = {
  __typename?: 'SearchFields';
  createdAt?: Maybe<SearchFields_createdAt>;
  doc?: Maybe<SearchFields_doc>;
  excerpt?: Maybe<SearchFields_excerpt>;
  priority?: Maybe<SearchFields_priority>;
  title?: Maybe<SearchFields_title>;
  updatedAt?: Maybe<SearchFields_updatedAt>;
};

export type SearchFields_createdAt = {
  __typename?: 'SearchFields_createdAt';
  create?: Maybe<SearchFields_createdAt_Create>;
  delete?: Maybe<SearchFields_createdAt_Delete>;
  read?: Maybe<SearchFields_createdAt_Read>;
  update?: Maybe<SearchFields_createdAt_Update>;
};

export type SearchFields_createdAt_Create = {
  __typename?: 'SearchFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_createdAt_Delete = {
  __typename?: 'SearchFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_createdAt_Read = {
  __typename?: 'SearchFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_createdAt_Update = {
  __typename?: 'SearchFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_doc = {
  __typename?: 'SearchFields_doc';
  create?: Maybe<SearchFields_doc_Create>;
  delete?: Maybe<SearchFields_doc_Delete>;
  read?: Maybe<SearchFields_doc_Read>;
  update?: Maybe<SearchFields_doc_Update>;
};

export type SearchFields_doc_Create = {
  __typename?: 'SearchFields_doc_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_doc_Delete = {
  __typename?: 'SearchFields_doc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_doc_Read = {
  __typename?: 'SearchFields_doc_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_doc_Update = {
  __typename?: 'SearchFields_doc_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_excerpt = {
  __typename?: 'SearchFields_excerpt';
  create?: Maybe<SearchFields_excerpt_Create>;
  delete?: Maybe<SearchFields_excerpt_Delete>;
  read?: Maybe<SearchFields_excerpt_Read>;
  update?: Maybe<SearchFields_excerpt_Update>;
};

export type SearchFields_excerpt_Create = {
  __typename?: 'SearchFields_excerpt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_excerpt_Delete = {
  __typename?: 'SearchFields_excerpt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_excerpt_Read = {
  __typename?: 'SearchFields_excerpt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_excerpt_Update = {
  __typename?: 'SearchFields_excerpt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_priority = {
  __typename?: 'SearchFields_priority';
  create?: Maybe<SearchFields_priority_Create>;
  delete?: Maybe<SearchFields_priority_Delete>;
  read?: Maybe<SearchFields_priority_Read>;
  update?: Maybe<SearchFields_priority_Update>;
};

export type SearchFields_priority_Create = {
  __typename?: 'SearchFields_priority_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_priority_Delete = {
  __typename?: 'SearchFields_priority_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_priority_Read = {
  __typename?: 'SearchFields_priority_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_priority_Update = {
  __typename?: 'SearchFields_priority_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_title = {
  __typename?: 'SearchFields_title';
  create?: Maybe<SearchFields_title_Create>;
  delete?: Maybe<SearchFields_title_Delete>;
  read?: Maybe<SearchFields_title_Read>;
  update?: Maybe<SearchFields_title_Update>;
};

export type SearchFields_title_Create = {
  __typename?: 'SearchFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_title_Delete = {
  __typename?: 'SearchFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_title_Read = {
  __typename?: 'SearchFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_title_Update = {
  __typename?: 'SearchFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_updatedAt = {
  __typename?: 'SearchFields_updatedAt';
  create?: Maybe<SearchFields_updatedAt_Create>;
  delete?: Maybe<SearchFields_updatedAt_Delete>;
  read?: Maybe<SearchFields_updatedAt_Read>;
  update?: Maybe<SearchFields_updatedAt_Update>;
};

export type SearchFields_updatedAt_Create = {
  __typename?: 'SearchFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_updatedAt_Delete = {
  __typename?: 'SearchFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_updatedAt_Read = {
  __typename?: 'SearchFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SearchFields_updatedAt_Update = {
  __typename?: 'SearchFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SearchReadAccess = {
  __typename?: 'SearchReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SearchReadDocAccess = {
  __typename?: 'SearchReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SearchUpdateAccess = {
  __typename?: 'SearchUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SearchUpdateDocAccess = {
  __typename?: 'SearchUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SearchUpdate_DocRelationshipInput = {
  relationTo?: InputMaybe<SearchUpdate_DocRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum SearchUpdate_DocRelationshipInputRelationTo {
  Authors = 'authors',
  MicroPosts = 'micro_posts',
  Tags = 'tags'
}

export type Search_Doc = Author | Micro_post | Tag;

export type Search_DocRelationshipInput = {
  relationTo?: InputMaybe<Search_DocRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Search_DocRelationshipInputRelationTo {
  Authors = 'authors',
  MicroPosts = 'micro_posts',
  Tags = 'tags'
}

export enum Search_Doc_RelationTo {
  Authors = 'authors',
  MicroPosts = 'micro_posts',
  Tags = 'tags'
}

export type Search_Doc_Relationship = {
  __typename?: 'Search_Doc_Relationship';
  relationTo?: Maybe<Search_Doc_RelationTo>;
  value?: Maybe<Search_Doc>;
};

export type Search_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Search_doc_Relation = {
  relationTo?: InputMaybe<Search_doc_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Search_doc_Relation_RelationTo {
  Authors = 'authors',
  MicroPosts = 'micro_posts',
  Tags = 'tags'
}

export type Search_excerpt_operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Search_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Search_priority_operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Search_title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Search_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Search_where = {
  AND?: InputMaybe<Array<InputMaybe<Search_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Search_where_or>>>;
  createdAt?: InputMaybe<Search_createdAt_operator>;
  doc?: InputMaybe<Search_doc_Relation>;
  excerpt?: InputMaybe<Search_excerpt_operator>;
  id?: InputMaybe<Search_id_operator>;
  priority?: InputMaybe<Search_priority_operator>;
  title?: InputMaybe<Search_title_operator>;
  updatedAt?: InputMaybe<Search_updatedAt_operator>;
};

export type Search_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Search_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Search_where_or>>>;
  createdAt?: InputMaybe<Search_createdAt_operator>;
  doc?: InputMaybe<Search_doc_Relation>;
  excerpt?: InputMaybe<Search_excerpt_operator>;
  id?: InputMaybe<Search_id_operator>;
  priority?: InputMaybe<Search_priority_operator>;
  title?: InputMaybe<Search_title_operator>;
  updatedAt?: InputMaybe<Search_updatedAt_operator>;
};

export type Search_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Search_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Search_where_or>>>;
  createdAt?: InputMaybe<Search_createdAt_operator>;
  doc?: InputMaybe<Search_doc_Relation>;
  excerpt?: InputMaybe<Search_excerpt_operator>;
  id?: InputMaybe<Search_id_operator>;
  priority?: InputMaybe<Search_priority_operator>;
  title?: InputMaybe<Search_title_operator>;
  updatedAt?: InputMaybe<Search_updatedAt_operator>;
};

export type Searches = {
  __typename?: 'Searches';
  docs: Array<Search>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  micro_posts?: Maybe<Tag_Micro_posts>;
  name: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type Tagmicro_postsArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Micro_post_where>;
};

export type Tag_Micro_posts = {
  __typename?: 'Tag_Micro_posts';
  docs: Array<Micro_post>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Tag_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_name_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_where = {
  AND?: InputMaybe<Array<InputMaybe<Tag_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_where_or>>>;
  createdAt?: InputMaybe<Tag_createdAt_operator>;
  id?: InputMaybe<Tag_id_operator>;
  name?: InputMaybe<Tag_name_operator>;
  title?: InputMaybe<Tag_title_operator>;
  updatedAt?: InputMaybe<Tag_updatedAt_operator>;
};

export type Tag_where_and = {
  AND?: InputMaybe<Array<InputMaybe<Tag_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_where_or>>>;
  createdAt?: InputMaybe<Tag_createdAt_operator>;
  id?: InputMaybe<Tag_id_operator>;
  name?: InputMaybe<Tag_name_operator>;
  title?: InputMaybe<Tag_title_operator>;
  updatedAt?: InputMaybe<Tag_updatedAt_operator>;
};

export type Tag_where_or = {
  AND?: InputMaybe<Array<InputMaybe<Tag_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_where_or>>>;
  createdAt?: InputMaybe<Tag_createdAt_operator>;
  id?: InputMaybe<Tag_id_operator>;
  name?: InputMaybe<Tag_name_operator>;
  title?: InputMaybe<Tag_title_operator>;
  updatedAt?: InputMaybe<Tag_updatedAt_operator>;
};

export type Tags = {
  __typename?: 'Tags';
  docs: Array<Tag>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type TagsCreateAccess = {
  __typename?: 'TagsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsCreateDocAccess = {
  __typename?: 'TagsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteAccess = {
  __typename?: 'TagsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteDocAccess = {
  __typename?: 'TagsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDocAccessFields = {
  __typename?: 'TagsDocAccessFields';
  createdAt?: Maybe<TagsDocAccessFields_createdAt>;
  micro_posts?: Maybe<TagsDocAccessFields_micro_posts>;
  name?: Maybe<TagsDocAccessFields_name>;
  title?: Maybe<TagsDocAccessFields_title>;
  updatedAt?: Maybe<TagsDocAccessFields_updatedAt>;
};

export type TagsDocAccessFields_createdAt = {
  __typename?: 'TagsDocAccessFields_createdAt';
  create?: Maybe<TagsDocAccessFields_createdAt_Create>;
  delete?: Maybe<TagsDocAccessFields_createdAt_Delete>;
  read?: Maybe<TagsDocAccessFields_createdAt_Read>;
  update?: Maybe<TagsDocAccessFields_createdAt_Update>;
};

export type TagsDocAccessFields_createdAt_Create = {
  __typename?: 'TagsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_createdAt_Delete = {
  __typename?: 'TagsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_createdAt_Read = {
  __typename?: 'TagsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_createdAt_Update = {
  __typename?: 'TagsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_micro_posts = {
  __typename?: 'TagsDocAccessFields_micro_posts';
  create?: Maybe<TagsDocAccessFields_micro_posts_Create>;
  delete?: Maybe<TagsDocAccessFields_micro_posts_Delete>;
  read?: Maybe<TagsDocAccessFields_micro_posts_Read>;
  update?: Maybe<TagsDocAccessFields_micro_posts_Update>;
};

export type TagsDocAccessFields_micro_posts_Create = {
  __typename?: 'TagsDocAccessFields_micro_posts_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_micro_posts_Delete = {
  __typename?: 'TagsDocAccessFields_micro_posts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_micro_posts_Read = {
  __typename?: 'TagsDocAccessFields_micro_posts_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_micro_posts_Update = {
  __typename?: 'TagsDocAccessFields_micro_posts_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_name = {
  __typename?: 'TagsDocAccessFields_name';
  create?: Maybe<TagsDocAccessFields_name_Create>;
  delete?: Maybe<TagsDocAccessFields_name_Delete>;
  read?: Maybe<TagsDocAccessFields_name_Read>;
  update?: Maybe<TagsDocAccessFields_name_Update>;
};

export type TagsDocAccessFields_name_Create = {
  __typename?: 'TagsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_name_Delete = {
  __typename?: 'TagsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_name_Read = {
  __typename?: 'TagsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_name_Update = {
  __typename?: 'TagsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_title = {
  __typename?: 'TagsDocAccessFields_title';
  create?: Maybe<TagsDocAccessFields_title_Create>;
  delete?: Maybe<TagsDocAccessFields_title_Delete>;
  read?: Maybe<TagsDocAccessFields_title_Read>;
  update?: Maybe<TagsDocAccessFields_title_Update>;
};

export type TagsDocAccessFields_title_Create = {
  __typename?: 'TagsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_title_Delete = {
  __typename?: 'TagsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_title_Read = {
  __typename?: 'TagsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_title_Update = {
  __typename?: 'TagsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_updatedAt = {
  __typename?: 'TagsDocAccessFields_updatedAt';
  create?: Maybe<TagsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_updatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_updatedAt_Update>;
};

export type TagsDocAccessFields_updatedAt_Create = {
  __typename?: 'TagsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_updatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_updatedAt_Read = {
  __typename?: 'TagsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_updatedAt_Update = {
  __typename?: 'TagsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields = {
  __typename?: 'TagsFields';
  createdAt?: Maybe<TagsFields_createdAt>;
  micro_posts?: Maybe<TagsFields_micro_posts>;
  name?: Maybe<TagsFields_name>;
  title?: Maybe<TagsFields_title>;
  updatedAt?: Maybe<TagsFields_updatedAt>;
};

export type TagsFields_createdAt = {
  __typename?: 'TagsFields_createdAt';
  create?: Maybe<TagsFields_createdAt_Create>;
  delete?: Maybe<TagsFields_createdAt_Delete>;
  read?: Maybe<TagsFields_createdAt_Read>;
  update?: Maybe<TagsFields_createdAt_Update>;
};

export type TagsFields_createdAt_Create = {
  __typename?: 'TagsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_createdAt_Delete = {
  __typename?: 'TagsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_createdAt_Read = {
  __typename?: 'TagsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_createdAt_Update = {
  __typename?: 'TagsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_micro_posts = {
  __typename?: 'TagsFields_micro_posts';
  create?: Maybe<TagsFields_micro_posts_Create>;
  delete?: Maybe<TagsFields_micro_posts_Delete>;
  read?: Maybe<TagsFields_micro_posts_Read>;
  update?: Maybe<TagsFields_micro_posts_Update>;
};

export type TagsFields_micro_posts_Create = {
  __typename?: 'TagsFields_micro_posts_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_micro_posts_Delete = {
  __typename?: 'TagsFields_micro_posts_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_micro_posts_Read = {
  __typename?: 'TagsFields_micro_posts_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_micro_posts_Update = {
  __typename?: 'TagsFields_micro_posts_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_name = {
  __typename?: 'TagsFields_name';
  create?: Maybe<TagsFields_name_Create>;
  delete?: Maybe<TagsFields_name_Delete>;
  read?: Maybe<TagsFields_name_Read>;
  update?: Maybe<TagsFields_name_Update>;
};

export type TagsFields_name_Create = {
  __typename?: 'TagsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_name_Delete = {
  __typename?: 'TagsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_name_Read = {
  __typename?: 'TagsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_name_Update = {
  __typename?: 'TagsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_title = {
  __typename?: 'TagsFields_title';
  create?: Maybe<TagsFields_title_Create>;
  delete?: Maybe<TagsFields_title_Delete>;
  read?: Maybe<TagsFields_title_Read>;
  update?: Maybe<TagsFields_title_Update>;
};

export type TagsFields_title_Create = {
  __typename?: 'TagsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_title_Delete = {
  __typename?: 'TagsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_title_Read = {
  __typename?: 'TagsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_title_Update = {
  __typename?: 'TagsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_updatedAt = {
  __typename?: 'TagsFields_updatedAt';
  create?: Maybe<TagsFields_updatedAt_Create>;
  delete?: Maybe<TagsFields_updatedAt_Delete>;
  read?: Maybe<TagsFields_updatedAt_Read>;
  update?: Maybe<TagsFields_updatedAt_Update>;
};

export type TagsFields_updatedAt_Create = {
  __typename?: 'TagsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_updatedAt_Delete = {
  __typename?: 'TagsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_updatedAt_Read = {
  __typename?: 'TagsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_updatedAt_Update = {
  __typename?: 'TagsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsReadAccess = {
  __typename?: 'TagsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsReadDocAccess = {
  __typename?: 'TagsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateAccess = {
  __typename?: 'TagsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateDocAccess = {
  __typename?: 'TagsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<User_Sessions>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_Sessions = {
  __typename?: 'User_Sessions';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type User_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_email_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_name_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_sessions__createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_sessions__expiresAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_sessions__id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_where = {
  AND?: InputMaybe<Array<InputMaybe<User_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<User_where_or>>>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  id?: InputMaybe<User_id_operator>;
  name?: InputMaybe<User_name_operator>;
  sessions__createdAt?: InputMaybe<User_sessions__createdAt_operator>;
  sessions__expiresAt?: InputMaybe<User_sessions__expiresAt_operator>;
  sessions__id?: InputMaybe<User_sessions__id_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
};

export type User_where_and = {
  AND?: InputMaybe<Array<InputMaybe<User_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<User_where_or>>>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  id?: InputMaybe<User_id_operator>;
  name?: InputMaybe<User_name_operator>;
  sessions__createdAt?: InputMaybe<User_sessions__createdAt_operator>;
  sessions__expiresAt?: InputMaybe<User_sessions__expiresAt_operator>;
  sessions__id?: InputMaybe<User_sessions__id_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
};

export type User_where_or = {
  AND?: InputMaybe<Array<InputMaybe<User_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<User_where_or>>>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  id?: InputMaybe<User_id_operator>;
  name?: InputMaybe<User_name_operator>;
  sessions__createdAt?: InputMaybe<User_sessions__createdAt_operator>;
  sessions__expiresAt?: InputMaybe<User_sessions__expiresAt_operator>;
  sessions__id?: InputMaybe<User_sessions__id_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_createdAt>;
  email?: Maybe<UsersDocAccessFields_email>;
  name?: Maybe<UsersDocAccessFields_name>;
  sessions?: Maybe<UsersDocAccessFields_sessions>;
  updatedAt?: Maybe<UsersDocAccessFields_updatedAt>;
};

export type UsersDocAccessFields_createdAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_createdAt_Create>;
  delete?: Maybe<UsersDocAccessFields_createdAt_Delete>;
  read?: Maybe<UsersDocAccessFields_createdAt_Read>;
  update?: Maybe<UsersDocAccessFields_createdAt_Update>;
};

export type UsersDocAccessFields_createdAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_createdAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_createdAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_createdAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_email_Create>;
  delete?: Maybe<UsersDocAccessFields_email_Delete>;
  read?: Maybe<UsersDocAccessFields_email_Read>;
  update?: Maybe<UsersDocAccessFields_email_Update>;
};

export type UsersDocAccessFields_email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_name = {
  __typename?: 'UsersDocAccessFields_name';
  create?: Maybe<UsersDocAccessFields_name_Create>;
  delete?: Maybe<UsersDocAccessFields_name_Delete>;
  read?: Maybe<UsersDocAccessFields_name_Read>;
  update?: Maybe<UsersDocAccessFields_name_Update>;
};

export type UsersDocAccessFields_name_Create = {
  __typename?: 'UsersDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_name_Delete = {
  __typename?: 'UsersDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_name_Read = {
  __typename?: 'UsersDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_name_Update = {
  __typename?: 'UsersDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions = {
  __typename?: 'UsersDocAccessFields_sessions';
  create?: Maybe<UsersDocAccessFields_sessions_Create>;
  delete?: Maybe<UsersDocAccessFields_sessions_Delete>;
  fields?: Maybe<UsersDocAccessFields_sessions_Fields>;
  read?: Maybe<UsersDocAccessFields_sessions_Read>;
  update?: Maybe<UsersDocAccessFields_sessions_Update>;
};

export type UsersDocAccessFields_sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields';
  createdAt?: Maybe<UsersDocAccessFields_sessions_createdAt>;
  expiresAt?: Maybe<UsersDocAccessFields_sessions_expiresAt>;
  id?: Maybe<UsersDocAccessFields_sessions_id>;
};

export type UsersDocAccessFields_sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_createdAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt';
  create?: Maybe<UsersDocAccessFields_sessions_createdAt_Create>;
  delete?: Maybe<UsersDocAccessFields_sessions_createdAt_Delete>;
  read?: Maybe<UsersDocAccessFields_sessions_createdAt_Read>;
  update?: Maybe<UsersDocAccessFields_sessions_createdAt_Update>;
};

export type UsersDocAccessFields_sessions_createdAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_createdAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_createdAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_createdAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_expiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt';
  create?: Maybe<UsersDocAccessFields_sessions_expiresAt_Create>;
  delete?: Maybe<UsersDocAccessFields_sessions_expiresAt_Delete>;
  read?: Maybe<UsersDocAccessFields_sessions_expiresAt_Read>;
  update?: Maybe<UsersDocAccessFields_sessions_expiresAt_Update>;
};

export type UsersDocAccessFields_sessions_expiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_expiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_expiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_expiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_id = {
  __typename?: 'UsersDocAccessFields_sessions_id';
  create?: Maybe<UsersDocAccessFields_sessions_id_Create>;
  delete?: Maybe<UsersDocAccessFields_sessions_id_Delete>;
  read?: Maybe<UsersDocAccessFields_sessions_id_Read>;
  update?: Maybe<UsersDocAccessFields_sessions_id_Update>;
};

export type UsersDocAccessFields_sessions_id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_sessions_id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_updatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_updatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_updatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_updatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_updatedAt_Update>;
};

export type UsersDocAccessFields_updatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_updatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_updatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_updatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_createdAt>;
  email?: Maybe<UsersFields_email>;
  name?: Maybe<UsersFields_name>;
  sessions?: Maybe<UsersFields_sessions>;
  updatedAt?: Maybe<UsersFields_updatedAt>;
};

export type UsersFields_createdAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_createdAt_Create>;
  delete?: Maybe<UsersFields_createdAt_Delete>;
  read?: Maybe<UsersFields_createdAt_Read>;
  update?: Maybe<UsersFields_createdAt_Update>;
};

export type UsersFields_createdAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_createdAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_createdAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_createdAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_email_Create>;
  delete?: Maybe<UsersFields_email_Delete>;
  read?: Maybe<UsersFields_email_Read>;
  update?: Maybe<UsersFields_email_Update>;
};

export type UsersFields_email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_name = {
  __typename?: 'UsersFields_name';
  create?: Maybe<UsersFields_name_Create>;
  delete?: Maybe<UsersFields_name_Delete>;
  read?: Maybe<UsersFields_name_Read>;
  update?: Maybe<UsersFields_name_Update>;
};

export type UsersFields_name_Create = {
  __typename?: 'UsersFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_name_Delete = {
  __typename?: 'UsersFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_name_Read = {
  __typename?: 'UsersFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_name_Update = {
  __typename?: 'UsersFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions = {
  __typename?: 'UsersFields_sessions';
  create?: Maybe<UsersFields_sessions_Create>;
  delete?: Maybe<UsersFields_sessions_Delete>;
  fields?: Maybe<UsersFields_sessions_Fields>;
  read?: Maybe<UsersFields_sessions_Read>;
  update?: Maybe<UsersFields_sessions_Update>;
};

export type UsersFields_sessions_Create = {
  __typename?: 'UsersFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields';
  createdAt?: Maybe<UsersFields_sessions_createdAt>;
  expiresAt?: Maybe<UsersFields_sessions_expiresAt>;
  id?: Maybe<UsersFields_sessions_id>;
};

export type UsersFields_sessions_Read = {
  __typename?: 'UsersFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_Update = {
  __typename?: 'UsersFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_createdAt = {
  __typename?: 'UsersFields_sessions_createdAt';
  create?: Maybe<UsersFields_sessions_createdAt_Create>;
  delete?: Maybe<UsersFields_sessions_createdAt_Delete>;
  read?: Maybe<UsersFields_sessions_createdAt_Read>;
  update?: Maybe<UsersFields_sessions_createdAt_Update>;
};

export type UsersFields_sessions_createdAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_createdAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_createdAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_createdAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_expiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt';
  create?: Maybe<UsersFields_sessions_expiresAt_Create>;
  delete?: Maybe<UsersFields_sessions_expiresAt_Delete>;
  read?: Maybe<UsersFields_sessions_expiresAt_Read>;
  update?: Maybe<UsersFields_sessions_expiresAt_Update>;
};

export type UsersFields_sessions_expiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_expiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_expiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_expiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_id = {
  __typename?: 'UsersFields_sessions_id';
  create?: Maybe<UsersFields_sessions_id_Create>;
  delete?: Maybe<UsersFields_sessions_id_Delete>;
  read?: Maybe<UsersFields_sessions_id_Read>;
  update?: Maybe<UsersFields_sessions_id_Update>;
};

export type UsersFields_sessions_id_Create = {
  __typename?: 'UsersFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_id_Read = {
  __typename?: 'UsersFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_sessions_id_Update = {
  __typename?: 'UsersFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_updatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_updatedAt_Create>;
  delete?: Maybe<UsersFields_updatedAt_Delete>;
  read?: Maybe<UsersFields_updatedAt_Read>;
  update?: Maybe<UsersFields_updatedAt_Update>;
};

export type UsersFields_updatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_updatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_updatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_updatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ai_call_logsAccess = {
  __typename?: 'ai_call_logsAccess';
  create?: Maybe<Ai_call_logsCreateAccess>;
  delete?: Maybe<Ai_call_logsDeleteAccess>;
  fields?: Maybe<Ai_call_logsFields>;
  read?: Maybe<Ai_call_logsReadAccess>;
  update?: Maybe<Ai_call_logsUpdateAccess>;
};

export type ai_call_logsDocAccess = {
  __typename?: 'ai_call_logsDocAccess';
  create?: Maybe<Ai_call_logsCreateDocAccess>;
  delete?: Maybe<Ai_call_logsDeleteDocAccess>;
  fields?: Maybe<Ai_call_logsDocAccessFields>;
  read?: Maybe<Ai_call_logsReadDocAccess>;
  update?: Maybe<Ai_call_logsUpdateDocAccess>;
};

export type allMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type authorsAccess = {
  __typename?: 'authorsAccess';
  create?: Maybe<AuthorsCreateAccess>;
  delete?: Maybe<AuthorsDeleteAccess>;
  fields?: Maybe<AuthorsFields>;
  read?: Maybe<AuthorsReadAccess>;
  update?: Maybe<AuthorsUpdateAccess>;
};

export type authorsDocAccess = {
  __typename?: 'authorsDocAccess';
  create?: Maybe<AuthorsCreateDocAccess>;
  delete?: Maybe<AuthorsDeleteDocAccess>;
  fields?: Maybe<AuthorsDocAccessFields>;
  read?: Maybe<AuthorsReadDocAccess>;
  update?: Maybe<AuthorsUpdateDocAccess>;
};

export type countAi_call_logs = {
  __typename?: 'countAi_call_logs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countAuthors = {
  __typename?: 'countAuthors';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countMicro_post_external_links = {
  __typename?: 'countMicro_post_external_links';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countMicro_posts = {
  __typename?: 'countMicro_posts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countPayloadJobs = {
  __typename?: 'countPayloadJobs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countPayloadKvs = {
  __typename?: 'countPayloadKvs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countPayloadQueryPresets = {
  __typename?: 'countPayloadQueryPresets';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countPosts = {
  __typename?: 'countPosts';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countSearches = {
  __typename?: 'countSearches';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countTags = {
  __typename?: 'countTags';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type countallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type mediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type mediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type micro_post_external_linksAccess = {
  __typename?: 'micro_post_external_linksAccess';
  create?: Maybe<Micro_post_external_linksCreateAccess>;
  delete?: Maybe<Micro_post_external_linksDeleteAccess>;
  fields?: Maybe<Micro_post_external_linksFields>;
  read?: Maybe<Micro_post_external_linksReadAccess>;
  update?: Maybe<Micro_post_external_linksUpdateAccess>;
};

export type micro_post_external_linksDocAccess = {
  __typename?: 'micro_post_external_linksDocAccess';
  create?: Maybe<Micro_post_external_linksCreateDocAccess>;
  delete?: Maybe<Micro_post_external_linksDeleteDocAccess>;
  fields?: Maybe<Micro_post_external_linksDocAccessFields>;
  read?: Maybe<Micro_post_external_linksReadDocAccess>;
  update?: Maybe<Micro_post_external_linksUpdateDocAccess>;
};

export type micro_postsAccess = {
  __typename?: 'micro_postsAccess';
  create?: Maybe<Micro_postsCreateAccess>;
  delete?: Maybe<Micro_postsDeleteAccess>;
  fields?: Maybe<Micro_postsFields>;
  read?: Maybe<Micro_postsReadAccess>;
  readVersions?: Maybe<Micro_postsReadVersionsAccess>;
  update?: Maybe<Micro_postsUpdateAccess>;
};

export type micro_postsDocAccess = {
  __typename?: 'micro_postsDocAccess';
  create?: Maybe<Micro_postsCreateDocAccess>;
  delete?: Maybe<Micro_postsDeleteDocAccess>;
  fields?: Maybe<Micro_postsDocAccessFields>;
  read?: Maybe<Micro_postsReadDocAccess>;
  readVersions?: Maybe<Micro_postsReadVersionsDocAccess>;
  update?: Maybe<Micro_postsUpdateDocAccess>;
};

export type mutationAi_call_logInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  execution_time: Scalars['Float']['input'];
  input: Scalars['String']['input'];
  output: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type mutationAi_call_logUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  execution_time?: InputMaybe<Scalars['Float']['input']>;
  input?: InputMaybe<Scalars['String']['input']>;
  output?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type mutationAuthorInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  twitter?: InputMaybe<mutationAuthor_TwitterInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type mutationAuthorUpdateInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<mutationAuthorUpdate_TwitterInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type mutationAuthorUpdate_TwitterInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
};

export type mutationAuthor_TwitterInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
};

export type mutationMediaInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type mutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type mutationMicro_postInput = {
  _status?: InputMaybe<Micro_post__status_MutationInput>;
  attachment?: InputMaybe<Scalars['String']['input']>;
  authorSlug?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  cronTranslationLocalesQueued?: InputMaybe<Array<InputMaybe<Micro_post_cronTranslationLocalesQueued_MutationInput>>>;
  externalLinks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedMicroPosts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  meta?: InputMaybe<mutationMicro_post_MetaInput>;
  post_type?: InputMaybe<Micro_post_post_type_MutationInput>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  social?: InputMaybe<mutationMicro_post_SocialInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationMicro_postUpdateInput = {
  _status?: InputMaybe<Micro_postUpdate__status_MutationInput>;
  attachment?: InputMaybe<Scalars['String']['input']>;
  authorSlug?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  cronTranslationLocalesQueued?: InputMaybe<Array<InputMaybe<Micro_postUpdate_cronTranslationLocalesQueued_MutationInput>>>;
  externalLinks?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedMicroPosts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  meta?: InputMaybe<mutationMicro_postUpdate_MetaInput>;
  post_type?: InputMaybe<Micro_postUpdate_post_type_MutationInput>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  social?: InputMaybe<mutationMicro_postUpdate_SocialInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationMicro_postUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type mutationMicro_postUpdate_SocialInput = {
  x?: InputMaybe<mutationMicro_postUpdate_Social_XInput>;
};

export type mutationMicro_postUpdate_Social_XInput = {
  autoPost?: InputMaybe<Scalars['Boolean']['input']>;
  autoPosted?: InputMaybe<Scalars['Boolean']['input']>;
  autoPostedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationMicro_post_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type mutationMicro_post_SocialInput = {
  x?: InputMaybe<mutationMicro_post_Social_XInput>;
};

export type mutationMicro_post_Social_XInput = {
  autoPost?: InputMaybe<Scalars['Boolean']['input']>;
  autoPosted?: InputMaybe<Scalars['Boolean']['input']>;
  autoPostedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationMicro_post_external_linkInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  target_url: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationMicro_post_external_linkUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  target_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationPayloadJobInput = {
  completedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  error?: InputMaybe<Scalars['JSON']['input']>;
  hasError?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<Scalars['JSON']['input']>;
  log?: InputMaybe<Array<InputMaybe<mutationPayloadJob_LogInput>>>;
  processing?: InputMaybe<Scalars['Boolean']['input']>;
  queue?: InputMaybe<Scalars['String']['input']>;
  taskSlug?: InputMaybe<PayloadJob_taskSlug_MutationInput>;
  taskStatus?: InputMaybe<Scalars['JSON']['input']>;
  totalTried?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  waitUntil?: InputMaybe<Scalars['String']['input']>;
};

export type mutationPayloadJobUpdateInput = {
  completedAt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  error?: InputMaybe<Scalars['JSON']['input']>;
  hasError?: InputMaybe<Scalars['Boolean']['input']>;
  input?: InputMaybe<Scalars['JSON']['input']>;
  log?: InputMaybe<Array<InputMaybe<mutationPayloadJobUpdate_LogInput>>>;
  processing?: InputMaybe<Scalars['Boolean']['input']>;
  queue?: InputMaybe<Scalars['String']['input']>;
  taskSlug?: InputMaybe<PayloadJobUpdate_taskSlug_MutationInput>;
  taskStatus?: InputMaybe<Scalars['JSON']['input']>;
  totalTried?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  waitUntil?: InputMaybe<Scalars['String']['input']>;
};

export type mutationPayloadJobUpdate_LogInput = {
  completedAt: Scalars['String']['input'];
  error?: InputMaybe<Scalars['JSON']['input']>;
  executedAt: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<Scalars['JSON']['input']>;
  output?: InputMaybe<Scalars['JSON']['input']>;
  parent?: InputMaybe<mutationPayloadJobUpdate_Log_ParentInput>;
  state: Scalars['String']['input'];
  taskID: Scalars['String']['input'];
  taskSlug: PayloadJobUpdate_Log_taskSlug_MutationInput;
};

export type mutationPayloadJobUpdate_Log_ParentInput = {
  taskID?: InputMaybe<Scalars['String']['input']>;
  taskSlug?: InputMaybe<PayloadJobUpdate_Log_Parent_taskSlug_MutationInput>;
};

export type mutationPayloadJob_LogInput = {
  completedAt: Scalars['String']['input'];
  error?: InputMaybe<Scalars['JSON']['input']>;
  executedAt: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  input?: InputMaybe<Scalars['JSON']['input']>;
  output?: InputMaybe<Scalars['JSON']['input']>;
  parent?: InputMaybe<mutationPayloadJob_Log_ParentInput>;
  state: Scalars['String']['input'];
  taskID: Scalars['String']['input'];
  taskSlug: PayloadJob_Log_taskSlug_MutationInput;
};

export type mutationPayloadJob_Log_ParentInput = {
  taskID?: InputMaybe<Scalars['String']['input']>;
  taskSlug?: InputMaybe<PayloadJob_Log_Parent_taskSlug_MutationInput>;
};

export type mutationPayloadKvInput = {
  data: Scalars['JSON']['input'];
  key: Scalars['String']['input'];
};

export type mutationPayloadKvUpdateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type mutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type mutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type mutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type mutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type mutationPayloadQueryPresetInput = {
  access?: InputMaybe<mutationPayloadQueryPreset_AccessInput>;
  columns?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  groupBy?: InputMaybe<Scalars['String']['input']>;
  isShared?: InputMaybe<Scalars['Boolean']['input']>;
  isTemp?: InputMaybe<Scalars['Boolean']['input']>;
  relatedCollection: PayloadQueryPreset_relatedCollection_MutationInput;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type mutationPayloadQueryPresetUpdateInput = {
  access?: InputMaybe<mutationPayloadQueryPresetUpdate_AccessInput>;
  columns?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  groupBy?: InputMaybe<Scalars['String']['input']>;
  isShared?: InputMaybe<Scalars['Boolean']['input']>;
  isTemp?: InputMaybe<Scalars['Boolean']['input']>;
  relatedCollection?: InputMaybe<PayloadQueryPresetUpdate_relatedCollection_MutationInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Scalars['JSON']['input']>;
};

export type mutationPayloadQueryPresetUpdate_AccessInput = {
  delete?: InputMaybe<mutationPayloadQueryPresetUpdate_Access_DeleteInput>;
  read?: InputMaybe<mutationPayloadQueryPresetUpdate_Access_ReadInput>;
  update?: InputMaybe<mutationPayloadQueryPresetUpdate_Access_UpdateInput>;
};

export type mutationPayloadQueryPresetUpdate_Access_DeleteInput = {
  constraint?: InputMaybe<PayloadQueryPresetUpdate_Access_Delete_constraint_MutationInput>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type mutationPayloadQueryPresetUpdate_Access_ReadInput = {
  constraint?: InputMaybe<PayloadQueryPresetUpdate_Access_Read_constraint_MutationInput>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type mutationPayloadQueryPresetUpdate_Access_UpdateInput = {
  constraint?: InputMaybe<PayloadQueryPresetUpdate_Access_Update_constraint_MutationInput>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type mutationPayloadQueryPreset_AccessInput = {
  delete?: InputMaybe<mutationPayloadQueryPreset_Access_DeleteInput>;
  read?: InputMaybe<mutationPayloadQueryPreset_Access_ReadInput>;
  update?: InputMaybe<mutationPayloadQueryPreset_Access_UpdateInput>;
};

export type mutationPayloadQueryPreset_Access_DeleteInput = {
  constraint?: InputMaybe<PayloadQueryPreset_Access_Delete_constraint_MutationInput>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type mutationPayloadQueryPreset_Access_ReadInput = {
  constraint?: InputMaybe<PayloadQueryPreset_Access_Read_constraint_MutationInput>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type mutationPayloadQueryPreset_Access_UpdateInput = {
  constraint?: InputMaybe<PayloadQueryPreset_Access_Update_constraint_MutationInput>;
  users?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type mutationPostInput = {
  _status?: InputMaybe<Post__status_MutationInput>;
  authorSlug?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<mutationPost_MetaInput>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  relatedPosts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug: Scalars['String']['input'];
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationPostUpdateInput = {
  _status?: InputMaybe<PostUpdate__status_MutationInput>;
  authorSlug?: InputMaybe<Scalars['String']['input']>;
  authors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<mutationPostUpdate_MetaInput>;
  publishedAt?: InputMaybe<Scalars['String']['input']>;
  relatedPosts?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationPostUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  nofollow?: InputMaybe<Scalars['Boolean']['input']>;
  noindex?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type mutationPost_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  nofollow?: InputMaybe<Scalars['Boolean']['input']>;
  noindex?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type mutationSearchInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  doc?: InputMaybe<Search_DocRelationshipInput>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationSearchUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  doc?: InputMaybe<SearchUpdate_DocRelationshipInput>;
  excerpt?: InputMaybe<Scalars['String']['input']>;
  priority?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationTagInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<mutationUser_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<mutationUserUpdate_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type mutationUserUpdate_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type mutationUser_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type payload_jobsAccess = {
  __typename?: 'payload_jobsAccess';
  create?: Maybe<PayloadJobsCreateAccess>;
  delete?: Maybe<PayloadJobsDeleteAccess>;
  fields?: Maybe<PayloadJobsFields>;
  read?: Maybe<PayloadJobsReadAccess>;
  update?: Maybe<PayloadJobsUpdateAccess>;
};

export type payload_jobsDocAccess = {
  __typename?: 'payload_jobsDocAccess';
  create?: Maybe<PayloadJobsCreateDocAccess>;
  delete?: Maybe<PayloadJobsDeleteDocAccess>;
  fields?: Maybe<PayloadJobsDocAccessFields>;
  read?: Maybe<PayloadJobsReadDocAccess>;
  update?: Maybe<PayloadJobsUpdateDocAccess>;
};

export type payload_kvAccess = {
  __typename?: 'payload_kvAccess';
  create?: Maybe<PayloadKvCreateAccess>;
  delete?: Maybe<PayloadKvDeleteAccess>;
  fields?: Maybe<PayloadKvFields>;
  read?: Maybe<PayloadKvReadAccess>;
  update?: Maybe<PayloadKvUpdateAccess>;
};

export type payload_kvDocAccess = {
  __typename?: 'payload_kvDocAccess';
  create?: Maybe<PayloadKvCreateDocAccess>;
  delete?: Maybe<PayloadKvDeleteDocAccess>;
  fields?: Maybe<PayloadKvDocAccessFields>;
  read?: Maybe<PayloadKvReadDocAccess>;
  update?: Maybe<PayloadKvUpdateDocAccess>;
};

export type payload_locked_documentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type payload_locked_documentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type payload_preferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type payload_preferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type payload_query_presetsAccess = {
  __typename?: 'payload_query_presetsAccess';
  create?: Maybe<PayloadQueryPresetsCreateAccess>;
  delete?: Maybe<PayloadQueryPresetsDeleteAccess>;
  fields?: Maybe<PayloadQueryPresetsFields>;
  read?: Maybe<PayloadQueryPresetsReadAccess>;
  update?: Maybe<PayloadQueryPresetsUpdateAccess>;
};

export type payload_query_presetsDocAccess = {
  __typename?: 'payload_query_presetsDocAccess';
  create?: Maybe<PayloadQueryPresetsCreateDocAccess>;
  delete?: Maybe<PayloadQueryPresetsDeleteDocAccess>;
  fields?: Maybe<PayloadQueryPresetsDocAccessFields>;
  read?: Maybe<PayloadQueryPresetsReadDocAccess>;
  update?: Maybe<PayloadQueryPresetsUpdateDocAccess>;
};

export type postsAccess = {
  __typename?: 'postsAccess';
  create?: Maybe<PostsCreateAccess>;
  delete?: Maybe<PostsDeleteAccess>;
  fields?: Maybe<PostsFields>;
  read?: Maybe<PostsReadAccess>;
  readVersions?: Maybe<PostsReadVersionsAccess>;
  update?: Maybe<PostsUpdateAccess>;
};

export type postsDocAccess = {
  __typename?: 'postsDocAccess';
  create?: Maybe<PostsCreateDocAccess>;
  delete?: Maybe<PostsDeleteDocAccess>;
  fields?: Maybe<PostsDocAccessFields>;
  read?: Maybe<PostsReadDocAccess>;
  readVersions?: Maybe<PostsReadVersionsDocAccess>;
  update?: Maybe<PostsUpdateDocAccess>;
};

export type searchAccess = {
  __typename?: 'searchAccess';
  create?: Maybe<SearchCreateAccess>;
  delete?: Maybe<SearchDeleteAccess>;
  fields?: Maybe<SearchFields>;
  read?: Maybe<SearchReadAccess>;
  update?: Maybe<SearchUpdateAccess>;
};

export type searchDocAccess = {
  __typename?: 'searchDocAccess';
  create?: Maybe<SearchCreateDocAccess>;
  delete?: Maybe<SearchDeleteDocAccess>;
  fields?: Maybe<SearchDocAccessFields>;
  read?: Maybe<SearchReadDocAccess>;
  update?: Maybe<SearchUpdateDocAccess>;
};

export type tagsAccess = {
  __typename?: 'tagsAccess';
  create?: Maybe<TagsCreateAccess>;
  delete?: Maybe<TagsDeleteAccess>;
  fields?: Maybe<TagsFields>;
  read?: Maybe<TagsReadAccess>;
  update?: Maybe<TagsUpdateAccess>;
};

export type tagsDocAccess = {
  __typename?: 'tagsDocAccess';
  create?: Maybe<TagsCreateDocAccess>;
  delete?: Maybe<TagsDeleteDocAccess>;
  fields?: Maybe<TagsDocAccessFields>;
  read?: Maybe<TagsReadDocAccess>;
  update?: Maybe<TagsUpdateDocAccess>;
};

export type usersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type usersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type usersJWT = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type usersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type usersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type usersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<usersJWT>;
};

export type usersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type versionsMicro_post_autosave_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsMicro_post_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type versionsMicro_post_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsMicro_post_latest_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsMicro_post_parent_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum versionsMicro_post_publishedLocale_Input {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export type versionsMicro_post_publishedLocale_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsMicro_post_publishedLocale_Input>>>;
  equals?: InputMaybe<versionsMicro_post_publishedLocale_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<versionsMicro_post_publishedLocale_Input>>>;
  not_equals?: InputMaybe<versionsMicro_post_publishedLocale_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsMicro_post_publishedLocale_Input>>>;
};

export type versionsMicro_post_snapshot_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsMicro_post_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum versionsMicro_post_version___status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type versionsMicro_post_version___status_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsMicro_post_version___status_Input>>>;
  equals?: InputMaybe<versionsMicro_post_version___status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<versionsMicro_post_version___status_Input>>>;
  not_equals?: InputMaybe<versionsMicro_post_version___status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsMicro_post_version___status_Input>>>;
};

export type versionsMicro_post_version__attachment_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsMicro_post_version__authorSlug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsMicro_post_version__authors_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsMicro_post_version__content_operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type versionsMicro_post_version__createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum versionsMicro_post_version__cronTranslationLocalesQueued_Input {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export type versionsMicro_post_version__cronTranslationLocalesQueued_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsMicro_post_version__cronTranslationLocalesQueued_Input>>>;
  equals?: InputMaybe<versionsMicro_post_version__cronTranslationLocalesQueued_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<versionsMicro_post_version__cronTranslationLocalesQueued_Input>>>;
  not_equals?: InputMaybe<versionsMicro_post_version__cronTranslationLocalesQueued_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsMicro_post_version__cronTranslationLocalesQueued_Input>>>;
};

export type versionsMicro_post_version__externalLinks_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsMicro_post_version__linkedMicroPosts_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsMicro_post_version__meta__description_operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type versionsMicro_post_version__meta__image_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsMicro_post_version__meta__title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum versionsMicro_post_version__post_type_Input {
  Long = 'long',
  Short = 'short'
}

export type versionsMicro_post_version__post_type_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsMicro_post_version__post_type_Input>>>;
  equals?: InputMaybe<versionsMicro_post_version__post_type_Input>;
  in?: InputMaybe<Array<InputMaybe<versionsMicro_post_version__post_type_Input>>>;
  not_equals?: InputMaybe<versionsMicro_post_version__post_type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsMicro_post_version__post_type_Input>>>;
};

export type versionsMicro_post_version__publishedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type versionsMicro_post_version__slug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsMicro_post_version__social__x__autoPost_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsMicro_post_version__social__x__autoPostedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type versionsMicro_post_version__social__x__autoPosted_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsMicro_post_version__tags_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsMicro_post_version__title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsMicro_post_version__updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type versionsMicro_post_where = {
  AND?: InputMaybe<Array<InputMaybe<versionsMicro_post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsMicro_post_where_or>>>;
  autosave?: InputMaybe<versionsMicro_post_autosave_operator>;
  createdAt?: InputMaybe<versionsMicro_post_createdAt_operator>;
  id?: InputMaybe<versionsMicro_post_id_operator>;
  latest?: InputMaybe<versionsMicro_post_latest_operator>;
  parent?: InputMaybe<versionsMicro_post_parent_operator>;
  publishedLocale?: InputMaybe<versionsMicro_post_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsMicro_post_snapshot_operator>;
  updatedAt?: InputMaybe<versionsMicro_post_updatedAt_operator>;
  version___status?: InputMaybe<versionsMicro_post_version___status_operator>;
  version__attachment?: InputMaybe<versionsMicro_post_version__attachment_operator>;
  version__authorSlug?: InputMaybe<versionsMicro_post_version__authorSlug_operator>;
  version__authors?: InputMaybe<versionsMicro_post_version__authors_operator>;
  version__content?: InputMaybe<versionsMicro_post_version__content_operator>;
  version__createdAt?: InputMaybe<versionsMicro_post_version__createdAt_operator>;
  version__cronTranslationLocalesQueued?: InputMaybe<versionsMicro_post_version__cronTranslationLocalesQueued_operator>;
  version__externalLinks?: InputMaybe<versionsMicro_post_version__externalLinks_operator>;
  version__linkedMicroPosts?: InputMaybe<versionsMicro_post_version__linkedMicroPosts_operator>;
  version__meta__description?: InputMaybe<versionsMicro_post_version__meta__description_operator>;
  version__meta__image?: InputMaybe<versionsMicro_post_version__meta__image_operator>;
  version__meta__title?: InputMaybe<versionsMicro_post_version__meta__title_operator>;
  version__post_type?: InputMaybe<versionsMicro_post_version__post_type_operator>;
  version__publishedAt?: InputMaybe<versionsMicro_post_version__publishedAt_operator>;
  version__slug?: InputMaybe<versionsMicro_post_version__slug_operator>;
  version__social__x__autoPost?: InputMaybe<versionsMicro_post_version__social__x__autoPost_operator>;
  version__social__x__autoPosted?: InputMaybe<versionsMicro_post_version__social__x__autoPosted_operator>;
  version__social__x__autoPostedAt?: InputMaybe<versionsMicro_post_version__social__x__autoPostedAt_operator>;
  version__tags?: InputMaybe<versionsMicro_post_version__tags_operator>;
  version__title?: InputMaybe<versionsMicro_post_version__title_operator>;
  version__updatedAt?: InputMaybe<versionsMicro_post_version__updatedAt_operator>;
};

export type versionsMicro_post_where_and = {
  AND?: InputMaybe<Array<InputMaybe<versionsMicro_post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsMicro_post_where_or>>>;
  autosave?: InputMaybe<versionsMicro_post_autosave_operator>;
  createdAt?: InputMaybe<versionsMicro_post_createdAt_operator>;
  id?: InputMaybe<versionsMicro_post_id_operator>;
  latest?: InputMaybe<versionsMicro_post_latest_operator>;
  parent?: InputMaybe<versionsMicro_post_parent_operator>;
  publishedLocale?: InputMaybe<versionsMicro_post_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsMicro_post_snapshot_operator>;
  updatedAt?: InputMaybe<versionsMicro_post_updatedAt_operator>;
  version___status?: InputMaybe<versionsMicro_post_version___status_operator>;
  version__attachment?: InputMaybe<versionsMicro_post_version__attachment_operator>;
  version__authorSlug?: InputMaybe<versionsMicro_post_version__authorSlug_operator>;
  version__authors?: InputMaybe<versionsMicro_post_version__authors_operator>;
  version__content?: InputMaybe<versionsMicro_post_version__content_operator>;
  version__createdAt?: InputMaybe<versionsMicro_post_version__createdAt_operator>;
  version__cronTranslationLocalesQueued?: InputMaybe<versionsMicro_post_version__cronTranslationLocalesQueued_operator>;
  version__externalLinks?: InputMaybe<versionsMicro_post_version__externalLinks_operator>;
  version__linkedMicroPosts?: InputMaybe<versionsMicro_post_version__linkedMicroPosts_operator>;
  version__meta__description?: InputMaybe<versionsMicro_post_version__meta__description_operator>;
  version__meta__image?: InputMaybe<versionsMicro_post_version__meta__image_operator>;
  version__meta__title?: InputMaybe<versionsMicro_post_version__meta__title_operator>;
  version__post_type?: InputMaybe<versionsMicro_post_version__post_type_operator>;
  version__publishedAt?: InputMaybe<versionsMicro_post_version__publishedAt_operator>;
  version__slug?: InputMaybe<versionsMicro_post_version__slug_operator>;
  version__social__x__autoPost?: InputMaybe<versionsMicro_post_version__social__x__autoPost_operator>;
  version__social__x__autoPosted?: InputMaybe<versionsMicro_post_version__social__x__autoPosted_operator>;
  version__social__x__autoPostedAt?: InputMaybe<versionsMicro_post_version__social__x__autoPostedAt_operator>;
  version__tags?: InputMaybe<versionsMicro_post_version__tags_operator>;
  version__title?: InputMaybe<versionsMicro_post_version__title_operator>;
  version__updatedAt?: InputMaybe<versionsMicro_post_version__updatedAt_operator>;
};

export type versionsMicro_post_where_or = {
  AND?: InputMaybe<Array<InputMaybe<versionsMicro_post_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsMicro_post_where_or>>>;
  autosave?: InputMaybe<versionsMicro_post_autosave_operator>;
  createdAt?: InputMaybe<versionsMicro_post_createdAt_operator>;
  id?: InputMaybe<versionsMicro_post_id_operator>;
  latest?: InputMaybe<versionsMicro_post_latest_operator>;
  parent?: InputMaybe<versionsMicro_post_parent_operator>;
  publishedLocale?: InputMaybe<versionsMicro_post_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsMicro_post_snapshot_operator>;
  updatedAt?: InputMaybe<versionsMicro_post_updatedAt_operator>;
  version___status?: InputMaybe<versionsMicro_post_version___status_operator>;
  version__attachment?: InputMaybe<versionsMicro_post_version__attachment_operator>;
  version__authorSlug?: InputMaybe<versionsMicro_post_version__authorSlug_operator>;
  version__authors?: InputMaybe<versionsMicro_post_version__authors_operator>;
  version__content?: InputMaybe<versionsMicro_post_version__content_operator>;
  version__createdAt?: InputMaybe<versionsMicro_post_version__createdAt_operator>;
  version__cronTranslationLocalesQueued?: InputMaybe<versionsMicro_post_version__cronTranslationLocalesQueued_operator>;
  version__externalLinks?: InputMaybe<versionsMicro_post_version__externalLinks_operator>;
  version__linkedMicroPosts?: InputMaybe<versionsMicro_post_version__linkedMicroPosts_operator>;
  version__meta__description?: InputMaybe<versionsMicro_post_version__meta__description_operator>;
  version__meta__image?: InputMaybe<versionsMicro_post_version__meta__image_operator>;
  version__meta__title?: InputMaybe<versionsMicro_post_version__meta__title_operator>;
  version__post_type?: InputMaybe<versionsMicro_post_version__post_type_operator>;
  version__publishedAt?: InputMaybe<versionsMicro_post_version__publishedAt_operator>;
  version__slug?: InputMaybe<versionsMicro_post_version__slug_operator>;
  version__social__x__autoPost?: InputMaybe<versionsMicro_post_version__social__x__autoPost_operator>;
  version__social__x__autoPosted?: InputMaybe<versionsMicro_post_version__social__x__autoPosted_operator>;
  version__social__x__autoPostedAt?: InputMaybe<versionsMicro_post_version__social__x__autoPostedAt_operator>;
  version__tags?: InputMaybe<versionsMicro_post_version__tags_operator>;
  version__title?: InputMaybe<versionsMicro_post_version__title_operator>;
  version__updatedAt?: InputMaybe<versionsMicro_post_version__updatedAt_operator>;
};

export type versionsMicro_posts = {
  __typename?: 'versionsMicro_posts';
  docs: Array<Micro_postVersion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type versionsPost_autosave_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsPost_createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type versionsPost_id_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsPost_latest_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsPost_parent_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum versionsPost_publishedLocale_Input {
  DeDe = 'de_DE',
  EnUs = 'en_US',
  EsEs = 'es_ES',
  FrFr = 'fr_FR',
  HiIn = 'hi_IN',
  JaJp = 'ja_JP',
  RuRu = 'ru_RU',
  UkUa = 'uk_UA'
}

export type versionsPost_publishedLocale_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsPost_publishedLocale_Input>>>;
  equals?: InputMaybe<versionsPost_publishedLocale_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<versionsPost_publishedLocale_Input>>>;
  not_equals?: InputMaybe<versionsPost_publishedLocale_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsPost_publishedLocale_Input>>>;
};

export type versionsPost_snapshot_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsPost_updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum versionsPost_version___status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type versionsPost_version___status_operator = {
  all?: InputMaybe<Array<InputMaybe<versionsPost_version___status_Input>>>;
  equals?: InputMaybe<versionsPost_version___status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<versionsPost_version___status_Input>>>;
  not_equals?: InputMaybe<versionsPost_version___status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<versionsPost_version___status_Input>>>;
};

export type versionsPost_version__authorSlug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsPost_version__authors_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsPost_version__content_operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type versionsPost_version__createdAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type versionsPost_version__featuredImage_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsPost_version__meta__description_operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type versionsPost_version__meta__image_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsPost_version__meta__nofollow_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsPost_version__meta__noindex_operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type versionsPost_version__meta__title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsPost_version__publishedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type versionsPost_version__relatedPosts_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsPost_version__slug_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsPost_version__subtitle_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsPost_version__tags_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type versionsPost_version__title_operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type versionsPost_version__updatedAt_operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type versionsPost_where = {
  AND?: InputMaybe<Array<InputMaybe<versionsPost_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsPost_where_or>>>;
  autosave?: InputMaybe<versionsPost_autosave_operator>;
  createdAt?: InputMaybe<versionsPost_createdAt_operator>;
  id?: InputMaybe<versionsPost_id_operator>;
  latest?: InputMaybe<versionsPost_latest_operator>;
  parent?: InputMaybe<versionsPost_parent_operator>;
  publishedLocale?: InputMaybe<versionsPost_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsPost_snapshot_operator>;
  updatedAt?: InputMaybe<versionsPost_updatedAt_operator>;
  version___status?: InputMaybe<versionsPost_version___status_operator>;
  version__authorSlug?: InputMaybe<versionsPost_version__authorSlug_operator>;
  version__authors?: InputMaybe<versionsPost_version__authors_operator>;
  version__content?: InputMaybe<versionsPost_version__content_operator>;
  version__createdAt?: InputMaybe<versionsPost_version__createdAt_operator>;
  version__featuredImage?: InputMaybe<versionsPost_version__featuredImage_operator>;
  version__meta__description?: InputMaybe<versionsPost_version__meta__description_operator>;
  version__meta__image?: InputMaybe<versionsPost_version__meta__image_operator>;
  version__meta__nofollow?: InputMaybe<versionsPost_version__meta__nofollow_operator>;
  version__meta__noindex?: InputMaybe<versionsPost_version__meta__noindex_operator>;
  version__meta__title?: InputMaybe<versionsPost_version__meta__title_operator>;
  version__publishedAt?: InputMaybe<versionsPost_version__publishedAt_operator>;
  version__relatedPosts?: InputMaybe<versionsPost_version__relatedPosts_operator>;
  version__slug?: InputMaybe<versionsPost_version__slug_operator>;
  version__subtitle?: InputMaybe<versionsPost_version__subtitle_operator>;
  version__tags?: InputMaybe<versionsPost_version__tags_operator>;
  version__title?: InputMaybe<versionsPost_version__title_operator>;
  version__updatedAt?: InputMaybe<versionsPost_version__updatedAt_operator>;
};

export type versionsPost_where_and = {
  AND?: InputMaybe<Array<InputMaybe<versionsPost_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsPost_where_or>>>;
  autosave?: InputMaybe<versionsPost_autosave_operator>;
  createdAt?: InputMaybe<versionsPost_createdAt_operator>;
  id?: InputMaybe<versionsPost_id_operator>;
  latest?: InputMaybe<versionsPost_latest_operator>;
  parent?: InputMaybe<versionsPost_parent_operator>;
  publishedLocale?: InputMaybe<versionsPost_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsPost_snapshot_operator>;
  updatedAt?: InputMaybe<versionsPost_updatedAt_operator>;
  version___status?: InputMaybe<versionsPost_version___status_operator>;
  version__authorSlug?: InputMaybe<versionsPost_version__authorSlug_operator>;
  version__authors?: InputMaybe<versionsPost_version__authors_operator>;
  version__content?: InputMaybe<versionsPost_version__content_operator>;
  version__createdAt?: InputMaybe<versionsPost_version__createdAt_operator>;
  version__featuredImage?: InputMaybe<versionsPost_version__featuredImage_operator>;
  version__meta__description?: InputMaybe<versionsPost_version__meta__description_operator>;
  version__meta__image?: InputMaybe<versionsPost_version__meta__image_operator>;
  version__meta__nofollow?: InputMaybe<versionsPost_version__meta__nofollow_operator>;
  version__meta__noindex?: InputMaybe<versionsPost_version__meta__noindex_operator>;
  version__meta__title?: InputMaybe<versionsPost_version__meta__title_operator>;
  version__publishedAt?: InputMaybe<versionsPost_version__publishedAt_operator>;
  version__relatedPosts?: InputMaybe<versionsPost_version__relatedPosts_operator>;
  version__slug?: InputMaybe<versionsPost_version__slug_operator>;
  version__subtitle?: InputMaybe<versionsPost_version__subtitle_operator>;
  version__tags?: InputMaybe<versionsPost_version__tags_operator>;
  version__title?: InputMaybe<versionsPost_version__title_operator>;
  version__updatedAt?: InputMaybe<versionsPost_version__updatedAt_operator>;
};

export type versionsPost_where_or = {
  AND?: InputMaybe<Array<InputMaybe<versionsPost_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<versionsPost_where_or>>>;
  autosave?: InputMaybe<versionsPost_autosave_operator>;
  createdAt?: InputMaybe<versionsPost_createdAt_operator>;
  id?: InputMaybe<versionsPost_id_operator>;
  latest?: InputMaybe<versionsPost_latest_operator>;
  parent?: InputMaybe<versionsPost_parent_operator>;
  publishedLocale?: InputMaybe<versionsPost_publishedLocale_operator>;
  snapshot?: InputMaybe<versionsPost_snapshot_operator>;
  updatedAt?: InputMaybe<versionsPost_updatedAt_operator>;
  version___status?: InputMaybe<versionsPost_version___status_operator>;
  version__authorSlug?: InputMaybe<versionsPost_version__authorSlug_operator>;
  version__authors?: InputMaybe<versionsPost_version__authors_operator>;
  version__content?: InputMaybe<versionsPost_version__content_operator>;
  version__createdAt?: InputMaybe<versionsPost_version__createdAt_operator>;
  version__featuredImage?: InputMaybe<versionsPost_version__featuredImage_operator>;
  version__meta__description?: InputMaybe<versionsPost_version__meta__description_operator>;
  version__meta__image?: InputMaybe<versionsPost_version__meta__image_operator>;
  version__meta__nofollow?: InputMaybe<versionsPost_version__meta__nofollow_operator>;
  version__meta__noindex?: InputMaybe<versionsPost_version__meta__noindex_operator>;
  version__meta__title?: InputMaybe<versionsPost_version__meta__title_operator>;
  version__publishedAt?: InputMaybe<versionsPost_version__publishedAt_operator>;
  version__relatedPosts?: InputMaybe<versionsPost_version__relatedPosts_operator>;
  version__slug?: InputMaybe<versionsPost_version__slug_operator>;
  version__subtitle?: InputMaybe<versionsPost_version__subtitle_operator>;
  version__tags?: InputMaybe<versionsPost_version__tags_operator>;
  version__title?: InputMaybe<versionsPost_version__title_operator>;
  version__updatedAt?: InputMaybe<versionsPost_version__updatedAt_operator>;
};

export type versionsPosts = {
  __typename?: 'versionsPosts';
  docs: Array<PostVersion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Get_AllAuthors_SlugsQueryVariables = Exact<{
  locale: LocaleInputType;
  limit: Scalars['Int']['input'];
}>;


export type Get_AllAuthors_SlugsQuery = { __typename?: 'Query', Authors?: { __typename?: 'Authors', docs: Array<{ __typename?: 'Author', slug: string }> } | null };

export type SinglePageAuthorSeoFragment = { __typename?: 'Author', name?: string | null, bio?: string | null, id: string, avatar?: (
    { __typename?: 'Media' }
    & { ' $fragmentRefs'?: { 'SEO_getOGImageFragment': SEO_getOGImageFragment } }
  ) | null } & { ' $fragmentName'?: 'SinglePageAuthorSeoFragment' };

export type authorPersonalPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
}>;


export type authorPersonalPageQuery = { __typename?: 'Query', Authors?: { __typename?: 'Authors', docs: Array<(
      { __typename?: 'Author', name?: string | null, bio?: string | null, slug: string }
      & { ' $fragmentRefs'?: { 'BlogListAuthorFragment': BlogListAuthorFragment;'SinglePageAuthorSeoFragment': SinglePageAuthorSeoFragment;'GetAuthorURLFragment': GetAuthorURLFragment;'SingleAuthorJsonLdFragment': SingleAuthorJsonLdFragment } }
    )> } | null };

export type MicroPostPage_getOGFragment = { __typename?: 'Micro_post', id: string, publishedAt?: string | null, title?: string | null, authors?: Array<(
    { __typename?: 'Author' }
    & { ' $fragmentRefs'?: { 'GetAuthorURLFragment': GetAuthorURLFragment } }
  )> | null, meta?: { __typename?: 'Micro_post_Meta', title?: string | null, description?: string | null, image?: (
      { __typename?: 'Media' }
      & { ' $fragmentRefs'?: { 'SEO_getOGImageFragment': SEO_getOGImageFragment } }
    ) | null } | null, tags?: Array<{ __typename?: 'Tag', name: string }> | null, attachment?: (
    { __typename?: 'Media' }
    & { ' $fragmentRefs'?: { 'SEO_getOGImageFragment': SEO_getOGImageFragment } }
  ) | null } & { ' $fragmentName'?: 'MicroPostPage_getOGFragment' };

export type Get_SingleMicroPost_SEOQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: LocaleInputType;
}>;


export type Get_SingleMicroPost_SEOQuery = { __typename?: 'Query', Micro_posts?: { __typename?: 'Micro_posts', docs: Array<(
      { __typename?: 'Micro_post', authors?: Array<(
        { __typename?: 'Author', name?: string | null }
        & { ' $fragmentRefs'?: { 'GetAuthorURLFragment': GetAuthorURLFragment } }
      )> | null, meta?: { __typename?: 'Micro_post_Meta', title?: string | null, description?: string | null } | null }
      & { ' $fragmentRefs'?: { 'MicroPostPage_getOGFragment': MicroPostPage_getOGFragment;'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment } }
    )> } | null };

export type Get_AllMicroPosts_SlugsQueryVariables = Exact<{
  locale: LocaleInputType;
  limit: Scalars['Int']['input'];
}>;


export type Get_AllMicroPosts_SlugsQuery = { __typename?: 'Query', Micro_posts?: { __typename?: 'Micro_posts', docs: Array<{ __typename?: 'Micro_post', slug?: string | null }> } | null };

export type FetchAllData_TagFragment = { __typename?: 'Tag', id: string, name: string, title?: string | null } & { ' $fragmentName'?: 'FetchAllData_TagFragment' };

export type NotesListItemFragment = { __typename?: 'Micro_post', id: string, slug?: string | null, title?: string | null, content?: string | null, publishedAt?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, title?: string | null }> | null, authors?: Array<{ __typename?: 'Author', id: string, name?: string | null, slug: string, bio?: string | null, avatar?: { __typename?: 'Media', url?: string | null, alt?: string | null, width?: number | null, height?: number | null } | null }> | null, attachment?: { __typename?: 'Media', url?: string | null, alt?: string | null, width?: number | null, height?: number | null } | null, meta?: { __typename?: 'Micro_post_Meta', image?: { __typename?: 'Media', url?: string | null, alt?: string | null, width?: number | null, height?: number | null } | null } | null } & { ' $fragmentName'?: 'NotesListItemFragment' };

export type TagFragmentFragment = (
  { __typename?: 'Tag', name: string, id: string, title?: string | null }
  & { ' $fragmentRefs'?: { 'fetchMicroblogPost_tagFragment': fetchMicroblogPost_tagFragment;'MicroBlogTagFragment': MicroBlogTagFragment } }
) & { ' $fragmentName'?: 'TagFragmentFragment' };

export type tagIdsQueryVariables = Exact<{
  tagNames?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  locale: LocaleInputType;
}>;


export type tagIdsQuery = { __typename?: 'Query', Tags?: { __typename?: 'Tags', docs: Array<(
      { __typename?: 'Tag' }
      & { ' $fragmentRefs'?: { 'TagFragmentFragment': TagFragmentFragment } }
    )> } | null };

export type AvailableTagsQueryVariables = Exact<{
  locale: LocaleInputType;
  postType?: InputMaybe<Scalars['String']['input']>;
}>;


export type AvailableTagsQuery = { __typename?: 'Query', availableTagsByMicroPostType: Array<{ __typename?: 'Tag', id: string, name: string, title?: string | null }> };

export type sitemap_blog_authors_listQueryVariables = Exact<{
  page: Scalars['Int']['input'];
}>;


export type sitemap_blog_authors_listQuery = { __typename?: 'Query', Authors?: { __typename?: 'Authors', docs: Array<(
      { __typename?: 'Author', slug: string }
      & { ' $fragmentRefs'?: { 'GetAuthorURLFragment': GetAuthorURLFragment } }
    )> } | null };

export type sitemap_blog_authors_list_totalQueryVariables = Exact<{ [key: string]: never; }>;


export type sitemap_blog_authors_list_totalQuery = { __typename?: 'Query', Authors?: { __typename?: 'Authors', totalPages: number } | null };

export type sitemap_blog_post_list_dffdQueryVariables = Exact<{
  page: Scalars['Int']['input'];
}>;


export type sitemap_blog_post_list_dffdQuery = { __typename?: 'Query', Micro_posts?: { __typename?: 'Micro_posts', docs: Array<(
      { __typename?: 'Micro_post', id: string, publishedAt?: string | null, updatedAt?: string | null, meta?: { __typename?: 'Micro_post_Meta', image?: (
          { __typename?: 'Media' }
          & { ' $fragmentRefs'?: { 'Util_getImageThumbFragment': Util_getImageThumbFragment } }
        ) | null } | null, attachment?: (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'Util_getImageThumbFragment': Util_getImageThumbFragment } }
      ) | null }
      & { ' $fragmentRefs'?: { 'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment } }
    )> } | null };

export type sitemap_blog_post_list_total_dfsdfQueryVariables = Exact<{ [key: string]: never; }>;


export type sitemap_blog_post_list_total_dfsdfQuery = { __typename?: 'Query', Micro_posts?: { __typename?: 'Micro_posts', totalPages: number } | null };

export type sitemap_blog_tags_listQueryVariables = Exact<{
  page: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type sitemap_blog_tags_listQuery = { __typename?: 'Query', Tags?: { __typename?: 'Tags', docs: Array<{ __typename?: 'Tag', id: string, name: string, createdAt?: string | null, updatedAt?: string | null }> } | null };

export type sitemap_blog_tags_list_totalQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
}>;


export type sitemap_blog_tags_list_totalQuery = { __typename?: 'Query', Tags?: { __typename?: 'Tags', totalPages: number } | null };

export type ContentfulBlogItemFragment = (
  { __typename?: 'Post', slug?: string | null, title?: string | null, subtitle?: string | null, authors?: Array<(
    { __typename?: 'Author' }
    & { ' $fragmentRefs'?: { 'BlogListAuthorFragment': BlogListAuthorFragment;'GetAuthorURLFragment': GetAuthorURLFragment } }
  )> | null, featuredImage?: (
    { __typename?: 'Media' }
    & { ' $fragmentRefs'?: { 'ContentfulImageFragment': ContentfulImageFragment } }
  ) | null, tags?: Array<{ __typename?: 'Tag', name: string }> | null }
  & { ' $fragmentRefs'?: { 'PostPublishDate_BlogPostFragment': PostPublishDate_BlogPostFragment;'GetPostURLFragment': GetPostURLFragment } }
) & { ' $fragmentName'?: 'ContentfulBlogItemFragment' };

export type BlogListAuthorFragment = (
  { __typename?: 'Author', id: string, name?: string | null, slug: string, bio?: string | null, avatar?: (
    { __typename?: 'Media' }
    & { ' $fragmentRefs'?: { 'ContentfulImageFragment': ContentfulImageFragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'GetAuthorURLFragment': GetAuthorURLFragment } }
) & { ' $fragmentName'?: 'BlogListAuthorFragment' };

export type SingleBlogPostBreadCrumbFragment = (
  { __typename?: 'Post', id: string, title?: string | null, authors?: Array<(
    { __typename?: 'Author', name?: string | null, slug: string }
    & { ' $fragmentRefs'?: { 'GetAuthorURLFragment': GetAuthorURLFragment } }
  )> | null }
  & { ' $fragmentRefs'?: { 'GetPostURLFragment': GetPostURLFragment } }
) & { ' $fragmentName'?: 'SingleBlogPostBreadCrumbFragment' };

export type SingleBlogPostContentFragment = (
  { __typename?: 'Post', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, authors?: Array<(
    { __typename?: 'Author' }
    & { ' $fragmentRefs'?: { 'BlogListAuthorFragment': BlogListAuthorFragment } }
  )> | null, tags?: Array<{ __typename?: 'Tag', name: string }> | null }
  & { ' $fragmentRefs'?: { 'PostPublishDate_BlogPostFragment': PostPublishDate_BlogPostFragment;'BlogPost_featuredImageFragFragment': BlogPost_featuredImageFragFragment } }
) & { ' $fragmentName'?: 'SingleBlogPostContentFragment' };

export type BlogPost_featuredImageFragFragment = { __typename?: 'Post', id: string, featuredImage?: (
    { __typename?: 'Media', caption?: string | null }
    & { ' $fragmentRefs'?: { 'ContentfulImageFragment': ContentfulImageFragment } }
  ) | null } & { ' $fragmentName'?: 'BlogPost_featuredImageFragFragment' };

export type SingleBlogPostJsonLDFragment = { __typename?: 'Post', id: string, slug?: string | null, title?: string | null, subtitle?: string | null, createdAt?: string | null, updatedAt?: string | null, publishedAt?: string | null, authors?: Array<(
    { __typename?: 'Author', name?: string | null, slug: string }
    & { ' $fragmentRefs'?: { 'GetAuthorURLFragment': GetAuthorURLFragment;'SingleAuthorJsonLdFragment': SingleAuthorJsonLdFragment } }
  )> | null, featuredImage?: (
    { __typename?: 'Media' }
    & { ' $fragmentRefs'?: { 'ImageJsonLdFragment': ImageJsonLdFragment } }
  ) | null } & { ' $fragmentName'?: 'SingleBlogPostJsonLDFragment' };

export type BlogPostText_TextFragment = { __typename?: 'Post', id: string, content?: string | null } & { ' $fragmentName'?: 'BlogPostText_TextFragment' };

export type PostPublishDate_BlogPostFragment = (
  { __typename?: 'Post', id: string, publishedAt?: string | null, slug?: string | null }
  & { ' $fragmentRefs'?: { 'GetPostURLFragment': GetPostURLFragment } }
) & { ' $fragmentName'?: 'PostPublishDate_BlogPostFragment' };

export type GetAuthorURLFragment = { __typename?: 'Author', slug: string, id: string } & { ' $fragmentName'?: 'GetAuthorURLFragment' };

export type GetPostURLFragment = { __typename?: 'Post', slug?: string | null, id: string } & { ' $fragmentName'?: 'GetPostURLFragment' };

export type ContentfulImageFragment = { __typename?: 'Media', id: string, alt?: string | null, description?: string | null, url?: string | null, width?: number | null, height?: number | null } & { ' $fragmentName'?: 'ContentfulImageFragment' };

export type SingleAuthorJsonLdFragment = (
  { __typename?: 'Author', name?: string | null, slug: string, bio?: string | null, id: string, avatar?: (
    { __typename?: 'Media' }
    & { ' $fragmentRefs'?: { 'ImageJsonLdFragment': ImageJsonLdFragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'GetAuthorURLFragment': GetAuthorURLFragment } }
) & { ' $fragmentName'?: 'SingleAuthorJsonLdFragment' };

export type SingleNoteJsonldFragment = (
  { __typename?: 'Micro_post', id: string, title?: string | null, publishedAt?: string | null, authors?: Array<(
    { __typename?: 'Author' }
    & { ' $fragmentRefs'?: { 'SingleAuthorJsonLdFragment': SingleAuthorJsonLdFragment } }
  )> | null, meta?: { __typename?: 'Micro_post_Meta', title?: string | null, description?: string | null, image?: (
      { __typename?: 'Media' }
      & { ' $fragmentRefs'?: { 'ImageJsonLdFragment': ImageJsonLdFragment } }
    ) | null } | null, linkedMicroPosts?: Array<(
    { __typename?: 'Micro_post', id: string }
    & { ' $fragmentRefs'?: { 'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment } }
  )> | null, externalLinks?: Array<{ __typename?: 'Micro_post_external_link', id: string, title?: string | null, target_url: string }> | null }
  & { ' $fragmentRefs'?: { 'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment } }
) & { ' $fragmentName'?: 'SingleNoteJsonldFragment' };

export type ImageJsonLdFragment = { __typename?: 'Media', id: string, width?: number | null, height?: number | null, url?: string | null, description?: string | null } & { ' $fragmentName'?: 'ImageJsonLdFragment' };

export type PostInternalLinksListFragment = { __typename?: 'Micro_post', linkedMicroPosts?: Array<(
    { __typename?: 'Micro_post', id: string, updatedAt?: string | null, title?: string | null, authors?: Array<(
      { __typename?: 'Author', id: string, name?: string | null }
      & { ' $fragmentRefs'?: { 'GetAuthorURLFragment': GetAuthorURLFragment } }
    )> | null }
    & { ' $fragmentRefs'?: { 'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment;'MicroPostPublishDate_BlogPostFragment': MicroPostPublishDate_BlogPostFragment } }
  )> | null } & { ' $fragmentName'?: 'PostInternalLinksListFragment' };

export type MicroBlogPostText_TextFragment = { __typename?: 'Micro_post', id: string, content?: string | null } & { ' $fragmentName'?: 'MicroBlogPostText_TextFragment' };

export type MicroBlogListItemFragment = (
  { __typename?: 'Micro_post', id: string, content?: string | null, title?: string | null, authors?: Array<(
    { __typename?: 'Author' }
    & { ' $fragmentRefs'?: { 'BlogListAuthorFragment': BlogListAuthorFragment } }
  )> | null, attachment?: (
    { __typename?: 'Media' }
    & { ' $fragmentRefs'?: { 'ContentfulImageFragment': ContentfulImageFragment } }
  ) | null, tags?: Array<(
    { __typename?: 'Tag', name: string }
    & { ' $fragmentRefs'?: { 'MicroBlogTagFragment': MicroBlogTagFragment } }
  )> | null, meta?: { __typename?: 'Micro_post_Meta', image?: (
      { __typename?: 'Media' }
      & { ' $fragmentRefs'?: { 'ContentfulImageFragment': ContentfulImageFragment } }
    ) | null } | null }
  & { ' $fragmentRefs'?: { 'MicroPostPublishDate_BlogPostFragment': MicroPostPublishDate_BlogPostFragment;'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment;'MicroBlogPostText_TextFragment': MicroBlogPostText_TextFragment;'MicroBlogListItem_toReactTranslateFragment': MicroBlogListItem_toReactTranslateFragment } }
) & { ' $fragmentName'?: 'MicroBlogListItemFragment' };

export type MicroBlogPostListWithDataFragment = (
  { __typename?: 'Micro_post', id: string }
  & { ' $fragmentRefs'?: { 'MicroBlogListItemFragment': MicroBlogListItemFragment } }
) & { ' $fragmentName'?: 'MicroBlogPostListWithDataFragment' };

export type SingleMicroBlogPostBreadCrumbFragment = (
  { __typename?: 'Micro_post', id: string, title?: string | null, authors?: Array<(
    { __typename?: 'Author', name?: string | null, slug: string }
    & { ' $fragmentRefs'?: { 'GetAuthorURLFragment': GetAuthorURLFragment } }
  )> | null }
  & { ' $fragmentRefs'?: { 'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment } }
) & { ' $fragmentName'?: 'SingleMicroBlogPostBreadCrumbFragment' };

export type OutGoingLinksListFragment = { __typename?: 'Micro_post', externalLinks?: Array<{ __typename?: 'Micro_post_external_link', id: string, title?: string | null, target_url: string }> | null } & { ' $fragmentName'?: 'OutGoingLinksListFragment' };

export type MicroPostPublishDate_BlogPostFragment = (
  { __typename?: 'Micro_post', publishedAt?: string | null, id: string }
  & { ' $fragmentRefs'?: { 'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment } }
) & { ' $fragmentName'?: 'MicroPostPublishDate_BlogPostFragment' };

export type MicroBlogListItem_toReactTranslateFragment = (
  { __typename?: 'Micro_post', id: string, content?: string | null }
  & { ' $fragmentRefs'?: { 'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment } }
) & { ' $fragmentName'?: 'MicroBlogListItem_toReactTranslateFragment' };

export type get_singleBlogMicroPostQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<LocaleInputType>;
}>;


export type get_singleBlogMicroPostQuery = { __typename?: 'Query', Micro_posts?: { __typename?: 'Micro_posts', docs: Array<(
      { __typename?: 'Micro_post' }
      & { ' $fragmentRefs'?: { 'SinglePostPageDataFragment': SinglePostPageDataFragment } }
    )> } | null };

export type SinglePostPageDataFragment = (
  { __typename?: 'Micro_post', title?: string | null, authors?: Array<(
    { __typename?: 'Author', id: string }
    & { ' $fragmentRefs'?: { 'BlogListAuthorFragment': BlogListAuthorFragment } }
  )> | null, tags?: Array<(
    { __typename?: 'Tag', id: string }
    & { ' $fragmentRefs'?: { 'MicroBlogTagFragment': MicroBlogTagFragment } }
  )> | null, externalLinks?: Array<{ __typename?: 'Micro_post_external_link', id: string, target_url: string }> | null, linkedMicroPosts?: Array<(
    { __typename?: 'Micro_post', id: string }
    & { ' $fragmentRefs'?: { 'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment } }
  )> | null, attachment?: (
    { __typename?: 'Media' }
    & { ' $fragmentRefs'?: { 'ContentfulImageFragment': ContentfulImageFragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'MicroBlogPostText_TextFragment': MicroBlogPostText_TextFragment;'SingleMicroBlogPostBreadCrumbFragment': SingleMicroBlogPostBreadCrumbFragment;'MicroPostPublishDate_BlogPostFragment': MicroPostPublishDate_BlogPostFragment;'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment;'OutGoingLinksListFragment': OutGoingLinksListFragment;'PostInternalLinksListFragment': PostInternalLinksListFragment;'SingleNoteJsonldFragment': SingleNoteJsonldFragment } }
) & { ' $fragmentName'?: 'SinglePostPageDataFragment' };

export type MicroBlogListItemQueryFragment = (
  { __typename?: 'Micro_post', id: string, meta?: { __typename?: 'Micro_post_Meta', image?: (
      { __typename?: 'Media', alt?: string | null }
      & { ' $fragmentRefs'?: { 'Util_getImageThumbFragment': Util_getImageThumbFragment } }
    ) | null } | null }
  & { ' $fragmentRefs'?: { 'MicroPostPublishDate_BlogPostFragment': MicroPostPublishDate_BlogPostFragment;'Blog_getMicropostHrefFragment': Blog_getMicropostHrefFragment;'MicroBlogPostText_TextFragment': MicroBlogPostText_TextFragment;'MicroBlogPostListWithDataFragment': MicroBlogPostListWithDataFragment;'MicroBlogListItemFragment': MicroBlogListItemFragment } }
) & { ' $fragmentName'?: 'MicroBlogListItemQueryFragment' };

export type MicroPoss_RSSFragment = { __typename?: 'Micro_post', id: string, title?: string | null, content?: string | null, publishedAt?: string | null, authors?: Array<{ __typename?: 'Author', name?: string | null }> | null, meta?: { __typename?: 'Micro_post_Meta', description?: string | null } | null, tags?: Array<{ __typename?: 'Tag', name: string }> | null } & { ' $fragmentName'?: 'MicroPoss_RSSFragment' };

export type MicroBlog_post_listQueryVariables = Exact<{
  authorIn?: InputMaybe<Array<Scalars['JSON']['input']> | Scalars['JSON']['input']>;
  locale?: InputMaybe<LocaleInputType>;
  limit: Scalars['Int']['input'];
  tagsIn?: InputMaybe<Array<Scalars['JSON']['input']> | Scalars['JSON']['input']>;
  page: Scalars['Int']['input'];
  postType: Micro_post_post_type_Input;
}>;


export type MicroBlog_post_listQuery = { __typename?: 'Query', Micro_posts?: { __typename?: 'Micro_posts', totalPages: number, docs: Array<(
      { __typename?: 'Micro_post' }
      & { ' $fragmentRefs'?: { 'MicroBlogListItemQueryFragment': MicroBlogListItemQueryFragment;'SingleNoteJsonldFragment': SingleNoteJsonldFragment;'MicroPoss_RSSFragment': MicroPoss_RSSFragment } }
    )> } | null };

export type fetchMicroblogPost_tagFragment = { __typename?: 'Tag', id: string, name: string } & { ' $fragmentName'?: 'fetchMicroblogPost_tagFragment' };

export type authorInFrag_authorFragment = { __typename?: 'Author', id: string, slug: string } & { ' $fragmentName'?: 'authorInFrag_authorFragment' };

export type AuthorQueryFragFragment = (
  { __typename?: 'Author', name?: string | null, id: string }
  & { ' $fragmentRefs'?: { 'authorInFrag_authorFragment': authorInFrag_authorFragment } }
) & { ' $fragmentName'?: 'AuthorQueryFragFragment' };

export type authorInFragQueryVariables = Exact<{
  authorSlugIn: Array<Scalars['String']['input']> | Scalars['String']['input'];
  locale: LocaleInputType;
}>;


export type authorInFragQuery = { __typename?: 'Query', Authors?: { __typename?: 'Authors', docs: Array<(
      { __typename?: 'Author' }
      & { ' $fragmentRefs'?: { 'AuthorQueryFragFragment': AuthorQueryFragFragment } }
    )> } | null };

export type Blog_getMicropostHrefFragment = { __typename?: 'Micro_post', id: string, slug?: string | null } & { ' $fragmentName'?: 'Blog_getMicropostHrefFragment' };

export type MicroBlogTagFragment = { __typename?: 'Tag', name: string, title?: string | null, id: string } & { ' $fragmentName'?: 'MicroBlogTagFragment' };

export type SearchItemFragment = { __typename?: 'Search_Doc_Relationship', value?:
    | { __typename: 'Author', id: string, bio?: string | null, authorSlug: string, title?: string | null, avatar?: (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'ContentfulImageFragment': ContentfulImageFragment } }
      ) | null }
    | (
      { __typename: 'Micro_post', id: string, title?: string | null, content?: string | null, micropostSlug?: string | null, meta?: { __typename?: 'Micro_post_Meta', image?: (
          { __typename?: 'Media' }
          & { ' $fragmentRefs'?: { 'ContentfulImageFragment': ContentfulImageFragment } }
        ) | null } | null, attachment?: (
        { __typename?: 'Media' }
        & { ' $fragmentRefs'?: { 'ContentfulImageFragment': ContentfulImageFragment } }
      ) | null }
      & { ' $fragmentRefs'?: { 'MicroBlogListItem_toReactTranslateFragment': MicroBlogListItem_toReactTranslateFragment } }
    )
    | { __typename: 'Tag', id: string, title?: string | null, tagName: string }
   | null } & { ' $fragmentName'?: 'SearchItemFragment' };

export type SearchQueryDocFragment = { __typename?: 'Search', id: string, title?: string | null, doc: (
    { __typename?: 'Search_Doc_Relationship' }
    & { ' $fragmentRefs'?: { 'SearchItemFragment': SearchItemFragment } }
  ) } & { ' $fragmentName'?: 'SearchQueryDocFragment' };

export type SearchQueryQueryVariables = Exact<{
  query: Scalars['String']['input'];
  locale: LocaleInputType;
}>;


export type SearchQueryQuery = { __typename?: 'Query', Searches?: { __typename?: 'Searches', docs: Array<(
      { __typename?: 'Search' }
      & { ' $fragmentRefs'?: { 'SearchQueryDocFragment': SearchQueryDocFragment } }
    )> } | null };

export type Util_getImageThumbFragment = { __typename?: 'Media', id: string, url?: string | null, width?: number | null, height?: number | null } & { ' $fragmentName'?: 'Util_getImageThumbFragment' };

export type SEO_getOGImageFragment = { __typename?: 'Media', id: string, url?: string | null, width?: number | null, height?: number | null, alt?: string | null } & { ' $fragmentName'?: 'SEO_getOGImageFragment' };

export const SEO_getOGImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEO_getOGImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]} as unknown as DocumentNode<SEO_getOGImageFragment, unknown>;
export const SinglePageAuthorSeoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SinglePageAuthorSeo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SEO_getOGImage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEO_getOGImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]} as unknown as DocumentNode<SinglePageAuthorSeoFragment, unknown>;
export const GetAuthorURLFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetAuthorURLFragment, unknown>;
export const MicroPostPage_getOGFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPage_getOG"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SEO_getOGImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SEO_getOGImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEO_getOGImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]} as unknown as DocumentNode<MicroPostPage_getOGFragment, unknown>;
export const FetchAllData_TagFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FetchAllData_Tag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<FetchAllData_TagFragment, unknown>;
export const NotesListItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NotesListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<NotesListItemFragment, unknown>;
export const fetchMicroblogPost_tagFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fetchMicroblogPost_tag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<fetchMicroblogPost_tagFragment, unknown>;
export const MicroBlogTagFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<MicroBlogTagFragment, unknown>;
export const TagFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TagFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fetchMicroblogPost_tag"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogTag"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fetchMicroblogPost_tag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<TagFragmentFragment, unknown>;
export const GetPostURLFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetPostURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<GetPostURLFragment, unknown>;
export const PostPublishDate_BlogPostFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetPostURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetPostURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<PostPublishDate_BlogPostFragment, unknown>;
export const ContentfulImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<ContentfulImageFragment, unknown>;
export const BlogListAuthorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<BlogListAuthorFragment, unknown>;
export const ContentfulBlogItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulBlogItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostPublishDate_BlogPost"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListAuthor"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetPostURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetPostURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetPostURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}}]} as unknown as DocumentNode<ContentfulBlogItemFragment, unknown>;
export const SingleBlogPostBreadCrumbFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleBlogPostBreadCrumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetPostURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetPostURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<SingleBlogPostBreadCrumbFragment, unknown>;
export const BlogPost_featuredImageFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPost_featuredImageFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<BlogPost_featuredImageFragFragment, unknown>;
export const SingleBlogPostContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleBlogPostContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostPublishDate_BlogPost"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListAuthor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPost_featuredImageFrag"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetPostURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetPostURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPost_featuredImageFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}},{"kind":"Field","name":{"kind":"Name","value":"caption"}}]}}]}}]} as unknown as DocumentNode<SingleBlogPostContentFragment, unknown>;
export const ImageJsonLdFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<ImageJsonLdFragment, unknown>;
export const SingleAuthorJsonLdFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleAuthorJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<SingleAuthorJsonLdFragment, unknown>;
export const SingleBlogPostJsonLDFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleBlogPostJsonLD"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleAuthorJsonLd"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"featuredImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleAuthorJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<SingleBlogPostJsonLDFragment, unknown>;
export const BlogPostText_TextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostText_Text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<BlogPostText_TextFragment, unknown>;
export const MicroBlogPostText_TextFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostText_Text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<MicroBlogPostText_TextFragment, unknown>;
export const Blog_getMicropostHrefFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<Blog_getMicropostHrefFragment, unknown>;
export const SingleMicroBlogPostBreadCrumbFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleMicroBlogPostBreadCrumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<SingleMicroBlogPostBreadCrumbFragment, unknown>;
export const MicroPostPublishDate_BlogPostFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<MicroPostPublishDate_BlogPostFragment, unknown>;
export const OutGoingLinksListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OutGoingLinksList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"target_url"}}]}}]}}]} as unknown as DocumentNode<OutGoingLinksListFragment, unknown>;
export const PostInternalLinksListFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostInternalLinksList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedMicroPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}}]} as unknown as DocumentNode<PostInternalLinksListFragment, unknown>;
export const SingleNoteJsonldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleNoteJsonld"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleAuthorJsonLd"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"linkedMicroPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"target_url"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleAuthorJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<SingleNoteJsonldFragment, unknown>;
export const SinglePostPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SinglePostPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostText_Text"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleMicroBlogPostBreadCrumb"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListAuthor"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogTag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"target_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedMicroPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OutGoingLinksList"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostInternalLinksList"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleNoteJsonld"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleAuthorJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostText_Text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleMicroBlogPostBreadCrumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OutGoingLinksList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"target_url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostInternalLinksList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedMicroPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleNoteJsonld"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleAuthorJsonLd"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"linkedMicroPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"target_url"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}}]} as unknown as DocumentNode<SinglePostPageDataFragment, unknown>;
export const MicroBlogListItem_toReactTranslateFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<MicroBlogListItem_toReactTranslateFragment, unknown>;
export const MicroBlogListItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostText_Text"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListAuthor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogTag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostText_Text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<MicroBlogListItemFragment, unknown>;
export const MicroBlogPostListWithDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostListWithData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostText_Text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostText_Text"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListAuthor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogTag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"}}]}}]} as unknown as DocumentNode<MicroBlogPostListWithDataFragment, unknown>;
export const Util_getImageThumbFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Util_getImageThumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<Util_getImageThumbFragment, unknown>;
export const MicroBlogListItemQueryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItemQuery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostText_Text"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostListWithData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Util_getImageThumb"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostText_Text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostText_Text"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListAuthor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogTag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostListWithData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Util_getImageThumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<MicroBlogListItemQueryFragment, unknown>;
export const MicroPoss_RSSFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPoss_RSS"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MicroPoss_RSSFragment, unknown>;
export const authorInFrag_authorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"authorInFrag_author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<authorInFrag_authorFragment, unknown>;
export const AuthorQueryFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthorQueryFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"authorInFrag_author"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"authorInFrag_author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<AuthorQueryFragFragment, unknown>;
export const SearchItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Search_Doc_Relationship"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"authorSlug"},"name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"micropostSlug"},"name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"tagName"},"name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<SearchItemFragment, unknown>;
export const SearchQueryDocFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchQueryDoc"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Search"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"doc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Search_Doc_Relationship"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"authorSlug"},"name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"micropostSlug"},"name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"tagName"},"name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<SearchQueryDocFragment, unknown>;
export const Get_AllAuthors_SlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Get_AllAuthors_Slugs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Authors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<Get_AllAuthors_SlugsQuery, Get_AllAuthors_SlugsQueryVariables>;
export const authorPersonalPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"authorPersonalPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Authors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListAuthor"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SinglePageAuthorSeo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleAuthorJsonLd"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEO_getOGImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SinglePageAuthorSeo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SEO_getOGImage"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleAuthorJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<authorPersonalPageQuery, authorPersonalPageQueryVariables>;
export const Get_SingleMicroPost_SEODocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Get_SingleMicroPost_SEO"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Micro_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPage_getOG"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SEO_getOGImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPage_getOG"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SEO_getOGImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SEO_getOGImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<Get_SingleMicroPost_SEOQuery, Get_SingleMicroPost_SEOQueryVariables>;
export const Get_AllMicroPosts_SlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Get_AllMicroPosts_Slugs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Micro_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<Get_AllMicroPosts_SlugsQuery, Get_AllMicroPosts_SlugsQueryVariables>;
export const tagIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tagIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagNames"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagNames"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TagFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"fetchMicroblogPost_tag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TagFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"fetchMicroblogPost_tag"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogTag"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<tagIdsQuery, tagIdsQueryVariables>;
export const AvailableTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AvailableTags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availableTagsByMicroPostType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"postType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<AvailableTagsQuery, AvailableTagsQueryVariables>;
export const sitemap_blog_authors_listDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sitemap_blog_authors_list"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Authors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<sitemap_blog_authors_listQuery, sitemap_blog_authors_listQueryVariables>;
export const sitemap_blog_authors_list_totalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sitemap_blog_authors_list_total"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<sitemap_blog_authors_list_totalQuery, sitemap_blog_authors_list_totalQueryVariables>;
export const sitemap_blog_post_list_dffdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sitemap_blog_post_list_dffd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Micro_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Util_getImageThumb"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Util_getImageThumb"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Util_getImageThumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]} as unknown as DocumentNode<sitemap_blog_post_list_dffdQuery, sitemap_blog_post_list_dffdQueryVariables>;
export const sitemap_blog_post_list_total_dfsdfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sitemap_blog_post_list_total_dfsdf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Micro_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<sitemap_blog_post_list_total_dfsdfQuery, sitemap_blog_post_list_total_dfsdfQueryVariables>;
export const sitemap_blog_tags_listDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sitemap_blog_tags_list"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<sitemap_blog_tags_listQuery, sitemap_blog_tags_listQueryVariables>;
export const sitemap_blog_tags_list_totalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sitemap_blog_tags_list_total"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<sitemap_blog_tags_list_totalQuery, sitemap_blog_tags_list_totalQueryVariables>;
export const get_singleBlogMicroPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"get_singleBlogMicroPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Micro_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SinglePostPageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostText_Text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleMicroBlogPostBreadCrumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OutGoingLinksList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"target_url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostInternalLinksList"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"linkedMicroPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleAuthorJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleNoteJsonld"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleAuthorJsonLd"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"linkedMicroPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"target_url"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SinglePostPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostText_Text"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleMicroBlogPostBreadCrumb"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListAuthor"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogTag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"target_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"linkedMicroPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OutGoingLinksList"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostInternalLinksList"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleNoteJsonld"}}]}}]} as unknown as DocumentNode<get_singleBlogMicroPostQuery, get_singleBlogMicroPostQueryVariables>;
export const MicroBlog_post_listDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MicroBlog_post_list"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorIn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagsIn"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post_post_type_Input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Micro_posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authors"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorIn"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"tags"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagsIn"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"post_type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postType"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItemQuery"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleNoteJsonld"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPoss_RSS"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostText_Text"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GetAuthorURL"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListAuthor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogTag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostText_Text"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListAuthor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogTag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogPostListWithData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Util_getImageThumb"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleAuthorJsonLd"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"GetAuthorURL"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItemQuery"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroPostPublishDate_BlogPost"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostText_Text"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogPostListWithData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Util_getImageThumb"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SingleNoteJsonld"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SingleAuthorJsonLd"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageJsonLd"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"linkedMicroPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"target_url"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroPoss_RSS"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"authors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MicroBlog_post_listQuery, MicroBlog_post_listQueryVariables>;
export const authorInFragDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"authorInFrag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorSlugIn"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Authors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorSlugIn"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthorQueryFrag"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"authorInFrag_author"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthorQueryFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"authorInFrag_author"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<authorInFragQuery, authorInFragQueryVariables>;
export const SearchQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Searches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"excerpt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"like"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"excerpt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchQueryDoc"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentfulImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Blog_getMicropostHref"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Blog_getMicropostHref"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Search_Doc_Relationship"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Author"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"authorSlug"},"name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Micro_post"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"micropostSlug"},"name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentfulImage"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MicroBlogListItem_toReactTranslate"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"tagName"},"name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchQueryDoc"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Search"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"doc"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchItem"}}]}}]}}]} as unknown as DocumentNode<SearchQueryQuery, SearchQueryQueryVariables>;