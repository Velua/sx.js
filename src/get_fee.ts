import { Asset } from "eos-common";
import { Settings } from "./interfaces"

export function get_fee( quantity: Asset, settings: Settings ): Asset {
    const stability_fee = Math.floor(settings.stability_fee * quantity.amount / 10000);
    const pool_fee = Math.floor(settings.pool_fee * quantity.amount / 10000);
    return new Asset( stability_fee + pool_fee, quantity.symbol );
}
