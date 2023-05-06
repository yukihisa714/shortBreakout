t = c.getContext("2d");
L = [];
for (i = 9; i--;) L[i] = Array(9).fill(5 - i);
t.fillStyle = "#eee";
r = (x, y, s) => t.fillRect(x, y, s, s);
a = n => n / 9 | 0;
p = 25;
b.onkeydown = e => (k = 38 - e.keyCode) ** 2 == 1 && k < p && p < 41 + k && (p -= k);
d = 49; e = 70;
v = w = 1;
setInterval(z => {
    t.clearRect(0, 0, 81, 81);
    if (e < 77) {
        for (i = 45; i--;)L[y = a(i)][x = i % 9] && r(x * 9, y * 9, 9);

        d += v; e += w;
        if (!d || 77 < d) v *= - 1;
        if (!e || L[y = a(e)][x = a(d)] > 0 || (p < d && d < p + 40 && 74 < e)) w *= -1, L[y][x] = 0;
        r(d, e, 4);

        r(p, 77, 40)
    }
}, 33)