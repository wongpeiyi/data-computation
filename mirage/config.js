export default function () {
  this.post('/posts', function (schema) {
    return schema.posts.create({ user: schema.users.first() });
  });
}
