import { useState } from "react";
import "./App.css";
import "./kviz.css";

function App() {
  const [bod, setBod] = useState(0);
  const [level, setLevel] = useState(0);
  const [brojPitanja, setBrojPitanja] = useState(0);
  const [clicked, setClicked] = useState(false);
  console.log("broj pitanja: ", brojPitanja, ", bod:", bod);
  const pitanja = [
    {
      nivo: 1,
      pitanja: [
        {
          pitanje: "Zašto je važno koristiti jake lozinke?",
          odgovori: [
            "Jer su teže za hakere da ih pogode",
            "Da biste izgledali pametno",
            "Da biste se brže prijavili na račun",
          ],
          tocanOdgovor: "Jer su teže za hakere da ih pogode",
        },
        {
          pitanje: "Koji od sljedećih primjera predstavlja jaku lozinku?",
          odgovori: ["12345", "password", "T3!sdF*8zQ"],
          tocanOdgovor: "T3!sdF*8zQ",
        },
        {
          pitanje: "Zašto je korisno koristiti password manager?",
          odgovori: [
            "Da ne biste morali pamtiti sve lozinke",
            "Da biste podijelili lozinke s prijateljima",
            "Da biste imali slabije lozinke",
          ],
          tocanOdgovor: "Da ne biste morali pamtiti sve lozinke",
        },
        {
          pitanje: "Kako password manager pomaže u sigurnosti?",
          odgovori: [
            "Generiše i čuva jake lozinke za različite račune",
            "Sprječava viruse",
            "Automatski isključuje računar",
          ],
          tocanOdgovor: "Generiše i čuva jake lozinke za različite račune",
        },
        {
          pitanje: "Što biste trebali učiniti ako zaboravite svoju lozinku?",
          odgovori: [
            "Pitati kolegu za njegovu lozinku",
            "Resetirati lozinku koristeći sigurnu opciju za oporavak",
            "Ne raditi ništa",
          ],
          tocanOdgovor:
            "Resetirati lozinku koristeći sigurnu opciju za oporavak",
        },
      ],
    },
    {
      nivo: 2,
      pitanja: [
        {
          pitanje: "Što je multifaktorska autentifikacija (MFA)?",
          odgovori: [
            "Korištenje samo lozinke za prijavu",
            "Dodatni sloj sigurnosti uz lozinku",
            "Čuvanje lozinki u oblaku",
          ],
          tocanOdgovor: "Dodatni sloj sigurnosti uz lozinku",
        },
        {
          pitanje: "Kako MFA poboljšava sigurnost vašeg računa?",
          odgovori: [
            "Zahtijeva više od jednog koraka za verifikaciju identiteta",
            "Automatski zaključava vaš račun",
            "Generiše nasumične lozinke",
          ],
          tocanOdgovor:
            "Zahtijeva više od jednog koraka za verifikaciju identiteta",
        },
        {
          pitanje: "Koji je jedan od uobičajenih faktora u MFA?",
          odgovori: [
            "Korištenje otiska prsta",
            "Pitanje o omiljenom filmu",
            "Provjera putem telefona prijatelja",
          ],
          tocanOdgovor: "Korištenje otiska prsta",
        },
        {
          pitanje: "Zašto je važno redovito ažurirati softver?",
          odgovori: [
            "Zbog novih sigurnosnih zakrpa koje štite od ranjivosti",
            "Da biste oslobodili prostor na disku",
            "Da bi računar radio brže",
          ],
          tocanOdgovor:
            "Zbog novih sigurnosnih zakrpa koje štite od ranjivosti",
        },
        {
          pitanje: "Što se događa kada ne ažurirate softver na vrijeme?",
          odgovori: [
            "Postajete ranjivi na nove sigurnosne prijetnje",
            "Softver automatski popravlja sve greške",
            "Neće biti problema",
          ],
          tocanOdgovor: "Postajete ranjivi na nove sigurnosne prijetnje",
        },
      ],
    },
    {
      nivo: 3,
      pitanja: [
        {
          pitanje: "Što je phishing?",
          odgovori: [
            "Prevara koja pokušava ukrasti vaše osobne podatke",
            "Korištenje više lozinki za različite račune",
            "Instaliranje antivirusnog softvera",
          ],
          tocanOdgovor: "Prevara koja pokušava ukrasti vaše osobne podatke",
        },
        {
          pitanje: "Kako možete prepoznati phishing email?",
          odgovori: [
            "Email ima loš pravopis i gramatičke greške",
            "Email dolazi od poznate osobe",
            "Sadrži bezopasne linkove",
          ],
          tocanOdgovor: "Email ima loš pravopis i gramatičke greške",
        },
        {
          pitanje: "Što biste trebali učiniti ako primite phishing email?",
          odgovori: [
            "Kliknuti na link i provjeriti o čemu se radi",
            "Ignorirati ga i obrisati",
            "Prijaviti email nadležnoj IT podršci ili sigurnosnom timu",
          ],
          tocanOdgovor:
            "Prijaviti email nadležnoj IT podršci ili sigurnosnom timu",
        },
        {
          pitanje: "Koji je najučinkovitiji način zaštite od phishing napada?",
          odgovori: [
            "Nikada ne otvarati emailove od nepoznatih pošiljatelja",
            "Koristiti jake lozinke za sve račune",
            "Redovito mijenjati računar",
          ],
          tocanOdgovor:
            "Nikada ne otvarati emailove od nepoznatih pošiljatelja",
        },
        {
          pitanje:
            "Kako ažuriranja softvera mogu pomoći u zaštiti od phishing napada?",
          odgovori: [
            "Sadrže zakrpe koje štite od ranjivosti koje phishing napadi mogu iskoristiti",
            "Prave lozinke duže",
            "Mijenjaju izgled emailova",
          ],
          tocanOdgovor:
            "Sadrže zakrpe koje štite od ranjivosti koje phishing napadi mogu iskoristiti",
        },
      ],
    },
  ];

  const settingStates = () => {
    setBod(bod + 1);
    setBrojPitanja(brojPitanja + 1);
    setClicked(false);
  };

  const settingFalseStates = () => {
    setBrojPitanja(brojPitanja + 1);
    setClicked(false);
  };

  const answerCheck = (answer) => {
    if (answer === pitanja[level].pitanja[brojPitanja].tocanOdgovor) {
      setClicked(true);
      setTimeout(settingStates, 1000);
    } else {
      setClicked(true);
      setTimeout(settingFalseStates, 1000);
    }
  };

  return (
    <div className="App">
      <div className="kviz">
        <h1 className="naslov">Kviz o Cyber Security</h1>
        {brojPitanja < pitanja[level].pitanja.length ? (
          <div>
            <p className="pitanje">
              {pitanja[level].pitanja[brojPitanja].pitanje}
            </p>
            <div className="odgovori">
              {clicked ? (
                pitanja[level].pitanja[brojPitanja].odgovori[0] ===
                pitanja[level].pitanja[brojPitanja].tocanOdgovor ? (
                  <button className="tocanOdgovor">
                    {pitanja[level].pitanja[brojPitanja].odgovori[0]}
                  </button>
                ) : (
                  <button className="neTocanOdgovor">
                    {pitanja[level].pitanja[brojPitanja].odgovori[0]}
                  </button>
                )
              ) : (
                <button
                  onClick={() => {
                    answerCheck(
                      pitanja[level].pitanja[brojPitanja].odgovori[0]
                    );
                  }}
                  className="odgovor"
                >
                  {" "}
                  {pitanja[level].pitanja[brojPitanja].odgovori[0]}{" "}
                </button>
              )}
              {clicked ? (
                pitanja[level].pitanja[brojPitanja].odgovori[1] ===
                pitanja[level].pitanja[brojPitanja].tocanOdgovor ? (
                  <button className="tocanOdgovor">
                    {pitanja[level].pitanja[brojPitanja].odgovori[1]}
                  </button>
                ) : (
                  <button className="neTocanOdgovor">
                    {pitanja[level].pitanja[brojPitanja].odgovori[1]}
                  </button>
                )
              ) : (
                <button
                  onClick={() => {
                    answerCheck(
                      pitanja[level].pitanja[brojPitanja].odgovori[1]
                    );
                  }}
                  className="odgovor"
                >
                  {" "}
                  {pitanja[level].pitanja[brojPitanja].odgovori[1]}{" "}
                </button>
              )}
              {clicked ? (
                pitanja[level].pitanja[brojPitanja].odgovori[2] ===
                pitanja[level].pitanja[brojPitanja].tocanOdgovor ? (
                  <button className="tocanOdgovor">
                    {pitanja[level].pitanja[brojPitanja].odgovori[2]}
                  </button>
                ) : (
                  <button className="neTocanOdgovor">
                    {pitanja[level].pitanja[brojPitanja].odgovori[2]}
                  </button>
                )
              ) : (
                <button
                  onClick={() => {
                    answerCheck(
                      pitanja[level].pitanja[brojPitanja].odgovori[2]
                    );
                  }}
                  className="odgovor"
                >
                  {" "}
                  {pitanja[level].pitanja[brojPitanja].odgovori[2]}{" "}
                </button>
              )}
            </div>
          </div>
        ) : (
          <h3 className="nema-vise">Nema više pitanja</h3>
        )}
        <p className="bodovi">Bodovi: {bod}</p>
        {bod > pitanja[level].nivo * 3 &&
        brojPitanja === pitanja[level].pitanja.length &&
        level <= pitanja.length - 2 ? (
          <h4
            className="next"
            onClick={() => {
              setLevel(level + 1);
              setBrojPitanja(0);
            }}
          >
            Sljedeći Nivo
          </h4>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default App;
