/*
 * File: app/view/Main.js
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

Ext.define('bma.view.Main', {
    extend: 'Ext.form.Panel',

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Login',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'registerButton',
                        text: 'Regiser'
                    }
                ]
            },
            {
                xtype: 'textfield',
                label: 'Username',
                name: 'username'
            },
            {
                xtype: 'passwordfield',
                label: 'Password',
                name: 'password'
            },
            {
                xtype: 'button',
                itemId: 'loginSubmit',
                ui: 'confirm',
                text: 'Submit'
            }
        ],
        listeners: [
            {
                fn: 'onRegisterButtonTap',
                event: 'tap',
                delegate: '#registerButton'
            },
            {
                fn: 'onLoginSubmitTap',
                event: 'tap',
                delegate: '#loginSubmit'
            }
        ]
    },

    onRegisterButtonTap: function(button, e, options) {
        console.log("Button hit: go to register");
        Ext.Viewport.setActiveItem(Ext.create('bma.view.Register'));
    },

    onLoginSubmitTap: function(button, e, options) {
        var values = this.getValues();
        if (values.username && values.password) {

            Ext.io.Io.getCurrentGroup({
                success: function(group) {
                    group.authenticate({
                        params: {
                            username: values.username,
                            password: values.password
                        },
                        success: function() {
                            Ext.Viewport.setActiveItem(Ext.create('bma.view.Lobby'));
                        }
                    });
                }
            });
        }
    }

});