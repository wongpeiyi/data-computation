export default function () {
  this.get('/users/:id');

  this.post('/posts', function (schema) {
    return schema.posts.create({ user: schema.users.first() });
  });
}
