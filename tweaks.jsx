// tweaks.jsx — Wings International tweak controls (isolated React root)
const WINGS_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": ["#b08a4a", "#d8bf8c"],
  "serif": "Newsreader",
  "motion": true,
  "density": "comfortable"
}/*EDITMODE-END*/;

const ACCENTS = [
  ["#b08a4a", "#d8bf8c"], // brass / gold (default)
  ["#2b5bb0", "#6f97d8"], // royal blue
  ["#2f7d5b", "#7fc0a3"], // evergreen
  ["#9a3b4e", "#c98494"]  // burgundy
];

const SERIFS = {
  "Newsreader":     '"Newsreader", Georgia, serif',
  "Spectral":       '"Spectral", Georgia, serif',
  "Source Serif 4": '"Source Serif 4", Georgia, serif'
};

function WingsTweaks() {
  const [t, setTweak] = useTweaks(WINGS_TWEAK_DEFAULTS);
  const root = document.documentElement;

  React.useEffect(() => {
    const a = t.accent || ACCENTS[0];
    root.style.setProperty("--accent", a[0]);
    root.style.setProperty("--accent-2", a[1]);
  }, [t.accent]);

  React.useEffect(() => {
    root.style.setProperty("--serif", SERIFS[t.serif] || SERIFS["Newsreader"]);
  }, [t.serif]);

  React.useEffect(() => {
    root.setAttribute("data-motion", t.motion ? "on" : "off");
  }, [t.motion]);

  React.useEffect(() => {
    root.setAttribute("data-density", t.density);
  }, [t.density]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Brand accent" />
      <TweakColor
        label="Accent"
        value={t.accent}
        options={ACCENTS}
        onChange={(v) => setTweak("accent", v)}
      />
      <TweakSection label="Typography" />
      <TweakSelect
        label="Headline font"
        value={t.serif}
        options={["Newsreader", "Spectral", "Source Serif 4"]}
        onChange={(v) => setTweak("serif", v)}
      />
      <TweakSection label="Feel" />
      <TweakRadio
        label="Density"
        value={t.density}
        options={["comfortable", "compact"]}
        onChange={(v) => setTweak("density", v)}
      />
      <TweakToggle
        label="Motion & parallax"
        value={t.motion}
        onChange={(v) => setTweak("motion", v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<WingsTweaks />);
