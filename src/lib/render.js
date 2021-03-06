export default (ctx, canvas, player, enemy, powerdot, pscore, gscore, image) => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Verdana';
    ctx.fillStyle = 'white';
    ctx.fillText(`Человек: ${pscore} Сопливчик: ${gscore}`, 2, 20);

    ctx.drawImage(image, player.pacX, player.pacY, 32, 32, player.x, player.y, player.size, player.size);
    ctx.drawImage(image, enemy.pacX, enemy.pacY, 32, 32, enemy.x, enemy.y, enemy.size, enemy.size);
}