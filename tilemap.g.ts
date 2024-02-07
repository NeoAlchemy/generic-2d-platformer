// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1900080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000090009000900000000000000000000000000000000000000000000000000000000000000000000000000000000000305040000000000000000000000000000000000000003040000000000000607080000000a0a00000000000001020202020202020202020202020202020202040b0b030505`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . 2 . 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . . . . . . . . . . 
. . . 2 2 . . . . . . . . . . . . 2 2 . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23,sprites.builtin.forestTiles22,sprites.swamp.swampTile0,sprites.swamp.swampTile1,sprites.swamp.swampTile2,sprites.builtin.forestTiles0,sprites.builtin.forestTiles8,sprites.builtin.forestTiles10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
