t = c.getContext("2d");
o = 10;
L = [];
for (i = o; i--;) L[i] = Array(o).fill(5 - i);
s = c => t.fillStyle = c;
r = (x, y, w, h) => t.fillRect(x, y, w, h);
a = n => n / o | 0;
p = 30;
b.onkeydown = e => (k = e.keyCode - 38) ** 2 == 1 && -k < p && p < 60 - k && (p += k);
bx = 50; by = 85;
vx = vy = 1;
setInterval(z => {
    s("#000");
    r(0, 0, 100, 100);
    s("#eee");
    if (by < 94) {
        for (i = 50; i--;)L[y = a(i)][x = i % o] && r(x * o, y * o, o, o);

        bx += vx; by += vy;
        if (bx < 0 || 96 < bx) vx *= - 1;
        if (L[y = a(by)][x = a(bx)] > 0 || (p < bx && bx < p + 40 && 86 < by)) vy *= -1, L[y][x] = 0;
        r(bx, by, 4, 4);

        r(p, 90, 40, 4)
    } else t.fillText("GAME OVER", 20, 55)
}, 32)