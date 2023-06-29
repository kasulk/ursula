import Image from "next/image";
import InfoButton from "../InfoButton";
import FavoriteButton from "../FavoriteButton";

type Props = {
  _id: string;
  Symbol: string;
  Name: string;
  Description: string;
  Exchange: string;
  Sector: string;
  Industry: string;
  DividendPerShare: number;
  DividendYield: number;
  EPS: number;
  EPSx15: number;
  BookValue: number;
  _52WeekHigh: number;
  _52WeekLow: number;
  AnalystTargetPrice: number;
  Price: number;
  Bruchwert52Week: number;
  onToggleFavorite: (id: string, user: string) => void;
  Favorites?: string[];
  LogoURL: string;
};

const logoSize = 64;

export default function StockCard({
  _id,
  Symbol,
  Name,
  Description,
  Exchange,
  Sector,
  Industry,
  DividendPerShare,
  DividendYield,
  EPS,
  EPSx15,
  BookValue,
  _52WeekHigh,
  _52WeekLow,
  AnalystTargetPrice,
  Price,
  Bruchwert52Week,
  onToggleFavorite,
  Favorites,
  LogoURL,
}: Props) {
  //

  return (
    <article
      className={`relative m-6 p-6 rounded-2xl shadow-md shadow-gray-500 text-slate-300 bg-slate-600 transition-all hover:bg-slate-800 hover:scale-x-[1.02] hover:shadow-lg hover:shadow-gray-500`}
    >
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        _id={_id}
        Favorites={Favorites}
      />
      <p className="text-xs">
        <span>{Symbol}</span>:<span>{Exchange}</span>
      </p>
      <header>
        <Image
          className="w-auto h-auto rounded-full mt-4 object-scale-down"
          src={LogoURL}
          width={logoSize}
          height={logoSize}
          alt={`Logo of ${Name}`}
        />
        <h1 className="my-2 font-bold text-xl">
          <span>{Name}</span>
          {Description && (
            <span title={Description}>
              <InfoButton />
            </span>
          )}
        </h1>
        <div className="my-2 text-xs text-right">
          <p className="my-1 font-bold">{Sector}</p>
          <p>{Industry}</p>
        </div>
      </header>
      {/*     >>> Numbers <<<     */}
      <p>
        <span className="text-sm text-slate-400">Dividend: </span>
        <span>
          {/* {DividendPerShare != "0" ? Number(DividendPerShare).toFixed(2) : "-"} */}
          {/* {Number(DividendPerShare) ? Number(DividendPerShare).toFixed(2) : "-"} */}
          {Number(DividendPerShare).toFixed(2)}
        </span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Dividend %: </span>
        <span>
          {Number(DividendYield) ? `${Number(DividendYield).toFixed(2)}%` : "-"}
        </span>
      </p>
      <p>
        <span className="text-sm text-slate-400">EPS: </span>
        <span>{EPS}</span>
      </p>
      <p title="FairValue: EPS x 15">
        <span className="text-sm text-slate-400">FairValue: </span>
        <span>{`${Number(EPSx15).toFixed(2)}`}</span>
      </p>
      {/* <p title="FairValue: EPS x 15">
        <span className="text-sm text-slate-400">FairValue (EPS): </span>
        <span>{`${Number(EPSx15).toFixed(2)} (${Number(EPS).toFixed( 2)})`}</span>
      </p> */}
      <p>
        <span className="text-sm text-slate-400">BookValue: </span>
        <span>{Number(BookValue).toFixed(2)}</span>
        {/* <span>{BookValue.toFixed(2)}</span> */}
      </p>
      <p>
        <span className="text-sm text-slate-400">52W Range: </span>
        <span>
          {Number(_52WeekLow).toFixed(2)} - {Number(_52WeekHigh).toFixed(2)}
        </span>
      </p>
      <p title="Bruchwert: Current distance from 52Week Low in %">
        <span className="text-sm text-slate-400">52W Bruchwert: </span>
        <span>
          {Number(Bruchwert52Week)
            ? Number(Bruchwert52Week).toFixed(2) + "%"
            : "-"}
        </span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Analyst Target Price: </span>
        <span>{Number(AnalystTargetPrice).toFixed(2)}</span>
      </p>
      <p>
        <span className="text-sm text-slate-400">Price: </span>
        <span>{Number(Price).toFixed(2)}</span>
      </p>
    </article>
  );
}
