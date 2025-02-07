export const isGraphQLTweetNotFoundResponse = (
  response: unknown
): response is GraphQLTweetNotFoundResponse => {
  return (
    typeof response === 'object' &&
    response !== null &&
    'errors' in response &&
    Array.isArray(response.errors) &&
    response.errors.length > 0 &&
    'message' in response.errors[0] &&
    response.errors[0].message === '_Missing: No status found with that ID'
  );
};

export const isGraphQLTweet = (response: unknown): response is GraphQLTweet => {
  return (
    typeof response === 'object' &&
    response !== null &&
    // @ts-expect-error it's 6 am please let me sleep
    ('__typename' in response && (response.__typename === 'Tweet' || response.__typename === 'TweetWithVisibilityResults') || ('legacy' in response && response.legacy?.full_text))
  );
};
