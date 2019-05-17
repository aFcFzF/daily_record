interface A {
    a: string;
    b: number;
}

interface B extends A {
    c: boolean;
}

let b: B = {
    a: '1',
    b: 1,
    c: true
};

// 例子1：
function repeat<T> (n: T, len: number): Array<T> {
    return Array.from({length: len}, x => n);
}
const arr = repeat<string>('1', 5);

// 例子2：
function strictCpy<T extends S, S>(target: T, source: S): T {
    for (const name in source) {
        source.hasOwnProperty(name) && (target[name] = (source as T)[name]);
    }
    return target;
}

const result = strictCpy({a: 1}, {a: 2, b: 2});
