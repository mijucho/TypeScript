// @strict: true

type T10 = string[];
type T11 = Array<string>;
type T12 = readonly string[];
type T13 = ReadonlyArray<string>;

type T20 = [number, number];
type T21 = readonly [number, number];

function f1(ma: string[], ra: readonly string[], mt: [string, string], rt: readonly [string, string]) {
    ma = ra;  // Error
    ma = mt;
    ma = rt;  // Error
    ra = ma;
    ra = mt;
    ra = rt;
    mt = ma;  // Error
    mt = ra;  // Error
    mt = rt;  // Error
    rt = ma;  // Error
    rt = ra;  // Error
    rt = mt;
}
