t = c.getContext("2d");
L = [];
for (i = 9; i--;) L[i] = Array(9).fill(5 - i);
s = c => t.fillStyle = c;
r = (x, y, w, h) => t.fillRect(x, y, w, h);
a = n => n / 9 | 0;
p = 25;
b.onkeydown = e => (k = 38 - e.keyCode) ** 2 == 1 && k < p && p < 41 + k && (p -= k);
d = 49; e = 60;
v = w = 1;
setInterval(z => {
    s("#000");
    r(0, 0, 81, 81);
    s("#eee");
    if (e < 70) {
        for (i = 45; i--;)L[y = a(i)][x = i % 9] && r(x * 9, y * 9, 9, 9);

        d += v; e += w;
        if (d < 0 || 77 < d) v *= - 1;
        if (!e || L[y = a(e)][x = a(d)] > 0 || (p < d && d < p + 40 && 66 < e)) w *= -1, L[y][x] = 0;
        r(d, e, 4, 4);

        r(p, 70, 40, 4)
    } else t.fillText("GAME OVER", 11, 45)

    // t.fillText("GAME OVER", 11, 45)
    // if (e > 70) break;
}, 32)