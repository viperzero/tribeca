/// <reference path="coinsetter.ts" />
/// <reference path="hitbtc.ts" />
/// <reference path="okcoin.ts" />
/// <reference path="ui.ts" />
/// <reference path="agent.ts" />

var gateways : Array<IGateway> = [new HitBtc.HitBtc(), new OkCoin.OkCoin()];
var brokers : Array<IBroker> = gateways.map(g => new ExchangeBroker(g));
var ui = new UI();
var agent = new Agent(brokers, ui);