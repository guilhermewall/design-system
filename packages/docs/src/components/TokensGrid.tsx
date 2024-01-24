import "../styles/tokens.grid.css";

// para declarar um objeto de chave e valor em uma interface, segue o exemplo:

interface TokensGridProps {
  tokens: Record<string, string>;
}

export function TokensGrid({ tokens }: TokensGridProps) {
  console.log(tokens);
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
