import { serverSupabaseClient } from "#supabase/server";
export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const body = await readBody(event);
  const { error } = await supabase
    .from("requestError")
    .insert({
      request: JSON.stringify(body),
      type: 1,
      result: JSON.stringify(body),
    } as any);
  return { body };
});
