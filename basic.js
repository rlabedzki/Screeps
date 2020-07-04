//Spawn a creep with the body [WORK,CARRY,MOVE], the name Builder1, and {role:'builder'} as its memory.
Game.spawns['Spawn1'].spawnCreep( 
    [WORK, CARRY, MOVE], 'Builder1',
    { memory: { role: 'builder' } } 
);

// the construction sites searchable
Room.find(FIND_CONSTRUCTION_SITES)

//Spawn a creep with the body [WORK,WORK,WORK,CARRY,MOVE,MOVE], the name HarvesterBig, and harvester role.
Game.spawns['Spawn1'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE],
    'HarvesterBig',
    { memory: { role: 'harvester' } } );