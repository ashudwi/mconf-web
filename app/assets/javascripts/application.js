//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap

// Use to search for models (e.g. users) dynamically.
//= require jquery/jquery.tokeninput

// To use placeholders in inputs in browsers that do not support it
// natively yet.
//= require jquery/jquery.placeholder

// Notifications (flash messages).
//= require jquery/jquery.noty

// To crop logos.
//= require jquery/jquery.Jcrop

// Used internally in the chat.
//= require jquery/jquery.autosize

// For modals.
//= require jquery/jquery.dialog2
//= require jquery/jquery.dialog2.helpers

// Used in crop, modals and possibly other places. Grep for `ajaxForm`
// and `ajaxSubmit`.
//= require jquery/jquery.form

// Use for XMPP in the chat.
//= require strophe

//= require i18n/translations

// TODO: remove this dependecy, this is only used in attachments now and
//       can be easily replaced by standard jquery methods.
//= require jquery/jquery.livequery

// 'base' HAS to be the first one included
//= require ./app/application/base
//= require_tree ./app/application/