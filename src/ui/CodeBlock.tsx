"use client";

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
interface JSONObject { [key: string]: JSONValue; }
interface JSONArray extends Array<JSONValue> {}

const syntaxHighlight = (value: JSONValue, indent = 2, level = 1): JSX.Element => {
  const padding = " ".repeat(level * indent);

  if (typeof value === "string") {
    return <span className="text-orange-300">"{value}"</span>;
  }
  if (typeof value === "number") {
    return <span className="text-yellow-400">{value}</span>;
  }
  if (typeof value === "boolean") {
    return <span className="text-purple-400">{value.toString()}</span>;
  }
  if (value === null) {
    return <span className="text-gray-400">null</span>;
  }
  if (Array.isArray(value)) {
    return (
      <>
        <span className="text-gray-300">[</span>
        {value.map((v, i) => (
          <div key={i} className="ml-6">
            {syntaxHighlight(v, indent, level + 1)}
            {i < value.length - 1 ? <span className="text-gray-300">,</span> : null}
          </div>
        ))}
        <span className="text-gray-300">{padding}]</span>
      </>
    );
  }
  if (typeof value === "object") {
    const entries = Object.entries(value);
    return (
      <>
        <span className="text-gray-300">{"{"}</span>
        {entries.map(([k, v], i) => (
          <div key={k} className="ml-6">
            <span className="text-cyan-300">"{k}"</span>
            <span className="text-gray-300">: </span>
            {syntaxHighlight(v, indent, level + 1)}
            {i < entries.length - 1 ? <span className="text-gray-300">,</span> : null}
          </div>
        ))}
        <span className="text-gray-300">{padding}{"}"}</span>
      </>
    );
  }
  return <></>;
};

export default function CodeBlock() {
  const data = {
    name: "Srikar Empati",
    age: 20,
    role: "Frontend Developer | Data Enthusiast",
    education: "Bachelor's in Information Technology",
    location: "Hyderabad, India",
    openSourceContributor: true,
    interests: ["Web Development", "Data Science", "Video Editing", "Prompt Engineering"],
    languages: ["English", "Telugu", "Hindi"],
    experience: null,
    personalMotto: "I can do this all day"
  };

  return (
    <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg border border-gray-700">
      {/* Header bar with Mac buttons */}
      <div className="flex items-center px-4 py-2 bg-[#2d2d2d]">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="ml-4 text-sm text-gray-400">Some Professional Info</span>
      </div>

      {/* Code block */}
      <div className="p-4 text-sm font-mono text-white overflow-x-auto">
        {syntaxHighlight(data)}
      </div>
    </div>
  );
}
