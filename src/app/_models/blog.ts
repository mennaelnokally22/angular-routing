export interface Blog {
  _id: string;
  authorId: { firstName: string; lastName: string };
  title: string;
  body: string;
  photo?: string;
  tags?: [];
}
