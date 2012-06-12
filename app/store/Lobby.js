Ext.define('bma.store.Lobby', {
    extend: 'Ext.data.Store',
    config: {
        model: 'bma.model.Lobby',
        proxy: {
            type: 'syncstorage',
            owner: 'group',
            id: 'lobbyStore'
        },
    }
});