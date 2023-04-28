t = c.getContext("2d");
o = 10;
L = [];
for (i = o; i--;) L[i] = Array(o).fill(5 - i);
s = c => t.fillStyle = c;
r = (x, y, w, h) => t.fillRect(x, y, w, h);
a = n => n / o | 0;
p = 30;
b.onkeydown = e => (k = e.keyCode - 38) ** 2 == 1 && -k < p && p < 60 - k && (p += k);
d = 50; e = 85;
v = w = 1;
setInterval(z => {
    s("#000");
    r(0, 0, 100, 100);
    s("#eee");
    if (e < 94) {
        for (i = 50; i--;)L[y = a(i)][x = i % o] && r(x * o, y * o, o, o);

        d += v; e += w;
        if (d < 0 || 96 < d) v *= - 1;
        if (L[y = a(e)][x = a(d)] > 0 || (p < d && d < p + 40 && 86 < e)) w *= -1, L[y][x] = 0;
        r(d, e, 4, 4);

        r(p, 90, 40, 4)
    } else t.fillText("GAME OVER", 20, 55)
}, 32)