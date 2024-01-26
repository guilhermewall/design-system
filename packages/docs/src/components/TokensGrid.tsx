import "../styles/tokens.grid.css";

// para declarar um objeto de chave e valor em uma interface, segue o exemplo:

interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValue?: boolean;
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  console.log(tokens);
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <th>{Number(value.replace("rem", "")) * 16}px</th>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
