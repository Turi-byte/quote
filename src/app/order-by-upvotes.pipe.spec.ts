import { OrderByUpvotesPipe } from './order-by-upvotes.pipe';

describe('OrderByUpvotesPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByUpvotesPipe();
    expect(pipe).toBeTruthy();
  });
});
