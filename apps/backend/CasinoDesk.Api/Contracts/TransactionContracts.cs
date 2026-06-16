using System.Text.Json.Serialization;
using CasinoDesk.Api.Domain;

namespace CasinoDesk.Api.Contracts;

public sealed record TransactionRequest(
    string ClientName,
    string DocumentNumber,
    [property: JsonRequired] decimal Amount,
    [property: JsonRequired] PaymentMethod PaymentMethod,
    string? OriginOfFunds,
    string? Justification,
    decimal? ChipsPlayedRatio
);

public sealed record TransactionResponse(
    Guid TransactionId,
    string ClientHash,
    RiskLevel RiskLevel,
    TransactionStatus Status,
    [property: JsonRequired] bool RequiresKyc,
    [property: JsonRequired] bool RequiresRte,
    [property: JsonRequired] bool AlertRaised,
    string Message
);

public sealed record ScreeningRunRequest(
    string ClientName,
    string DocumentNumber,
    [property: JsonRequired] decimal Amount
);
