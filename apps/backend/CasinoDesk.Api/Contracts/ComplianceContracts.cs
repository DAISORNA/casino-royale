using System.Text.Json.Serialization;

namespace CasinoDesk.Api.Contracts;

public sealed record AlertPatchRequest(string Status);
public sealed record RteCreateRequest(string ClientHash, [property: JsonRequired] decimal TotalAmount, string OriginOfFunds, [property: JsonRequired] bool SignedByClient, IReadOnlyCollection<Guid> TransactionIds);
public sealed record RosCreateRequest([property: JsonRequired] Guid AlertId, string Narrative);
