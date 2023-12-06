import { vi, test } from 'vitest';
import { Bar } from './bar';

vi.mock('./foo');

test('Bar', () => {
    new Bar();
});
