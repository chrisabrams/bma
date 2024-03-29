/*
 * File: app/model/Lobby.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('bma.model.Lobby', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'message',
                type: 'string'
            },
            {
                name: 'from',
                type: 'string'
            },
            {
                name: 'date',
                type: 'int'
            },
            {
                name: 'userID',
                type: 'string'
            }
        ]
    }
});