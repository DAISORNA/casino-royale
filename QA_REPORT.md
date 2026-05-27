# Reporte QA - Casino Royale

## 1. Informacion General

| Campo | Detalle |
| --- | --- |
| Proyecto auditado | casino-royale |
| Auditor QA | David Ortega |
| Repositorio QA | https://github.com/DAISORNA/casino-royale |
| Repositorio original | https://github.com/SiegfriedK04/Ingenieria4---Temporal |
| Herramienta | SonarQube Cloud / SonarCloud |
| Organizacion SonarCloud | David Ortega |
| Organization Key | `daisorna-1` |
| Project Key | `DAISORNA_casino-royale` |
| Rama analizada | `main` |
| Commit analizado | `fd80a092` |
| Fecha del reporte | 2026-05-26 |
| Dashboard SonarCloud | https://sonarcloud.io/summary/overall?id=DAISORNA_casino-royale&branch=main |

## 2. Objetivo

Realizar una auditoria QA estatica del proyecto `casino-royale` mediante SonarQube Cloud, identificando riesgos de seguridad, confiabilidad, mantenibilidad, duplicacion y ausencia de cobertura automatizada.

Este reporte esta orientado al equipo de desarrollo para facilitar la priorizacion de correcciones y mejoras tecnicas.

## 3. Alcance

El analisis fue ejecutado sobre el fork QA `DAISORNA/casino-royale`, sin modificar el codigo funcional del repositorio original.

Incluye:

- Analisis estatico de codigo.
- Revision de metricas generales de calidad.
- Identificacion de riesgos principales.
- Recomendaciones tecnicas para el equipo de desarrollo.

No incluye:

- Pruebas funcionales manuales completas.
- Pruebas de carga o performance.
- Pruebas de penetracion.
- Validacion completa de cobertura de tests, debido a que la cobertura no esta configurada en SonarCloud.

## 4. Resumen Ejecutivo

El proyecto fue importado y analizado correctamente en SonarQube Cloud. El analisis detecta issues abiertos en seguridad, confiabilidad y mantenibilidad.

La mantenibilidad obtiene una calificacion general favorable, pero existen riesgos relevantes en seguridad y confiabilidad que deben ser revisados por el equipo de desarrollo.

Adicionalmente, la cobertura de pruebas no se encuentra configurada, por lo que actualmente no existe evidencia automatizada desde SonarCloud sobre el porcentaje de codigo cubierto por tests.

## 5. Resultados Generales

| Metrica | Resultado |
| --- | --- |
| Quality Gate | No computado en el primer analisis; se actualizara en el siguiente analisis |
| Security | C - 4 issues abiertos |
| Reliability | C - 74 issues abiertos |
| Maintainability | A - 72 issues abiertos |
| Accepted Issues | 0 |
| Coverage | No configurada |
| Duplications | 1.3% |
| Lines of Code | 7.2k |
| Ultimo analisis | Hace aproximadamente 1 minuto al momento de la revision |

Nota: SonarCloud indica que algunas condiciones de duplicacion y cobertura fueron ignoradas para evitar falsos fallos en cambios pequenos, debido a que el codigo nuevo contiene menos de 20 lineas.

## 6. Hallazgos Principales

| ID | Categoria | Severidad QA | Hallazgo | Impacto Potencial | Recomendacion |
| --- | --- | --- | --- | --- | --- |
| QA-001 | Security | Alta | SonarCloud reporta 4 issues abiertos de seguridad. | Posible exposicion a vulnerabilidades o uso inseguro de datos/configuracion. | Revisar cada issue de seguridad en SonarCloud y priorizar su correccion antes de despliegues productivos. |
| QA-002 | Reliability | Alta | SonarCloud reporta 74 issues abiertos de confiabilidad. | Riesgo de errores en ejecucion, excepciones no controladas o comportamiento inconsistente. | Clasificar los issues por severidad y corregir primero los bugs criticos o bloqueantes. |
| QA-003 | Maintainability | Media | Existen 72 issues abiertos de mantenibilidad, aunque la calificacion general es A. | Incremento de deuda tecnica y mayor costo de mantenimiento futuro. | Atender code smells recurrentes, complejidad innecesaria y oportunidades de simplificacion. |
| QA-004 | Coverage | Alta | La cobertura de pruebas no esta configurada en SonarCloud. | No hay evidencia automatizada de cobertura del codigo analizado. | Configurar pruebas automatizadas y reportes de cobertura para frontend y backend. |
| QA-005 | Duplications | Baja | La duplicacion reportada es 1.3%. | Riesgo bajo actualmente. | Mantener monitoreo para evitar crecimiento de duplicacion en futuras iteraciones. |
| QA-006 | Quality Gate | Media | El Quality Gate aparece como no computado en el primer analisis. | No hay estado final consolidado de aprobacion/rechazo de calidad en este primer analisis. | Ejecutar un nuevo analisis y validar el estado del Quality Gate. |

## 7. Riesgos Identificados

- Existen issues abiertos de seguridad que requieren revision prioritaria.
- La categoria de confiabilidad presenta una cantidad alta de issues abiertos.
- No existe reporte de cobertura configurado en SonarCloud.
- El Quality Gate aun no presenta resultado final computado en el primer analisis.
- El analisis fue realizado sobre un fork QA, no directamente sobre el repositorio original.
- La ausencia de pruebas automatizadas visibles puede dificultar validar regresiones futuras.

## 8. Recomendaciones Para Desarrollo

1. Revisar y priorizar los 4 issues de seguridad reportados por SonarCloud.
2. Clasificar los 74 issues de confiabilidad por severidad e impacto funcional.
3. Configurar cobertura de pruebas para frontend y backend.
4. Ejecutar un nuevo analisis para obtener el estado actualizado del Quality Gate.
5. Crear tickets individuales para hallazgos criticos o de alta prioridad.
6. Validar que el pipeline de analisis se ejecute en cada push y Pull Request.
7. Mantener este reporte como evidencia QA y actualizarlo despues de cada ciclo relevante de correccion.

## 9. Evidencias

Dashboard principal de SonarCloud:

https://sonarcloud.io/summary/overall?id=DAISORNA_casino-royale&branch=main

Estado de coverage al configurar pruebas frontend en el fork QA:

| Metrica | Resultado local inicial |
| --- | --- |
| Test runner | Vitest |
| Reporte generado | `apps/frontend/coverage/lcov.info` |
| Test files | 2 passed |
| Tests | 6 passed |
| Statements | 2.29% |
| Branches | 3.89% |
| Functions | 1.11% |
| Lines | 2.65% |

Nota QA: el coverage inicial es bajo porque el proyecto no contaba con pruebas automatizadas previas. La configuracion permite que SonarCloud reciba coverage frontend en el siguiente analisis ejecutado por GitHub Actions. Para backend se requiere crear un proyecto de pruebas .NET y generar reporte OpenCover.

Evidencias sugeridas para adjuntar al reporte formal en PDF o Word:

- Captura del resumen general de SonarCloud.
- Captura de issues de Security.
- Captura de issues de Reliability.
- Captura de Maintainability.
- Captura de la seccion Coverage no configurada.
- Captura del estado del Quality Gate despues del siguiente analisis.

## 10. Detalle de Issues SonarCloud

La siguiente tabla identifica la ubicacion exacta de cada issue reportado por SonarCloud. Incluye categoria de calidad, severidad, regla, archivo y linea donde se detecta el hallazgo.

| ID | Calidad | Severidad | Tipo | Regla | Archivo | Linea | Hallazgo |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SQC-001 | MAINTAINABILITY | CRITICAL | CODE_SMELL | csharpsquid:S3776 | `apps/backend/CasinoDesk.Api/Services/TransactionService.cs` | 28 | Refactor this method to reduce its Cognitive Complexity from 19 to the 15 allowed. |
| SQC-002 | MAINTAINABILITY | CRITICAL | CODE_SMELL | typescript:S3776 | `apps/frontend/src/app/store.ts` | 266 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. |
| SQC-003 | MAINTAINABILITY | CRITICAL | CODE_SMELL | typescript:S3776 | `apps/frontend/src/components/AppShell.tsx` | 80 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. |
| SQC-004 | MAINTAINABILITY | CRITICAL | CODE_SMELL | typescript:S3735 | `apps/frontend/src/components/AppShell.tsx` | 141 | Remove this use of the 'void' operator. |
| SQC-005 | MAINTAINABILITY | CRITICAL | CODE_SMELL | typescript:S3776 | `apps/frontend/src/components/TransactionModals.tsx` | 42 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. |
| SQC-006 | MAINTAINABILITY | CRITICAL | CODE_SMELL | typescript:S3735 | `apps/frontend/src/features/compliance/AlertsPage.tsx` | 127 | Remove this use of the 'void' operator. |
| SQC-007 | MAINTAINABILITY | CRITICAL | CODE_SMELL | typescript:S3735 | `apps/frontend/src/features/compliance/AlertsPage.tsx` | 145 | Remove this use of the 'void' operator. |
| SQC-008 | MAINTAINABILITY | CRITICAL | CODE_SMELL | typescript:S3735 | `apps/frontend/src/features/compliance/OfficialDashboardPage.tsx` | 112 | Remove this use of the 'void' operator. |
| SQC-009 | MAINTAINABILITY | CRITICAL | CODE_SMELL | javascript:S3776 | `js/app.js` | 134 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. |
| SQC-010 | MAINTAINABILITY | MAJOR | CODE_SMELL | csharpsquid:S6960 | `apps/backend/CasinoDesk.Api/Controllers/TransactionsController.cs` | 13 | This controller has multiple responsibilities and could be split into 2 smaller controllers. |
| SQC-011 | MAINTAINABILITY | MAJOR | CODE_SMELL | csharpsquid:S3358 | `apps/backend/CasinoDesk.Api/Services/TransactionService.cs` | 146 | Extract this nested ternary operation into an independent statement. |
| SQC-012 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/api.ts` | 61 | Extract this nested ternary operation into an independent statement. |
| SQC-013 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/api.ts` | 91 | Extract this nested ternary operation into an independent statement. |
| SQC-014 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/api.ts` | 93 | Extract this nested ternary operation into an independent statement. |
| SQC-015 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/api.ts` | 100 | Extract this nested ternary operation into an independent statement. |
| SQC-016 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/api.ts` | 102 | Extract this nested ternary operation into an independent statement. |
| SQC-017 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/store.ts` | 139 | Extract this nested ternary operation into an independent statement. |
| SQC-018 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/store.ts` | 275 | Extract this nested ternary operation into an independent statement. |
| SQC-019 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/store.ts` | 277 | Extract this nested ternary operation into an independent statement. |
| SQC-020 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/store.ts` | 442 | Extract this nested ternary operation into an independent statement. |
| SQC-021 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/app/store.ts` | 444 | Extract this nested ternary operation into an independent statement. |
| SQC-022 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/components/AppShell.tsx` | 89 | Extract this nested ternary operation into an independent statement. |
| SQC-023 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/components/AppShell.tsx` | 91 | Extract this nested ternary operation into an independent statement. |
| SQC-024 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/components/AppShell.tsx` | 93 | Extract this nested ternary operation into an independent statement. |
| SQC-025 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/components/RiskBadge.tsx` | 5 | Extract this nested ternary operation into an independent statement. |
| SQC-026 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/components/RiskBadge.tsx` | 9 | Extract this nested ternary operation into an independent statement. |
| SQC-027 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S6848 | `apps/frontend/src/components/TransactionModals.tsx` | 27 | Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element. |
| SQC-028 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S6848 | `apps/frontend/src/components/TransactionModals.tsx` | 28 | Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element. |
| SQC-029 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S1854 | `apps/frontend/src/components/TransactionModals.tsx` | 313 | Remove this useless assignment to variable 'setAmount'. |
| SQC-030 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/features/dashboard/OperatorDashboardPage.tsx` | 190 | Extract this nested ternary operation into an independent statement. |
| SQC-031 | MAINTAINABILITY | MAJOR | CODE_SMELL | typescript:S3358 | `apps/frontend/src/features/dashboard/OperatorDashboardPage.tsx` | 200 | Extract this nested ternary operation into an independent statement. |
| SQC-032 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S7924 | `apps/frontend/src/styles/global.css` | 103 | Text does not meet the minimal contrast requirement with its background. |
| SQC-033 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S7924 | `apps/frontend/src/styles/global.css` | 169 | Text does not meet the minimal contrast requirement with its background. |
| SQC-034 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S7924 | `apps/frontend/src/styles/global.css` | 332 | Text does not meet the minimal contrast requirement with its background. |
| SQC-035 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S7924 | `apps/frontend/src/styles/global.css` | 476 | Text does not meet the minimal contrast requirement with its background. |
| SQC-036 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 514 | Duplicate selector ':root', first used at line 1. |
| SQC-037 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 526 | Duplicate selector 'body', first used at line 46. |
| SQC-038 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 549 | Duplicate selector '.header', first used at line 77. |
| SQC-039 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 573 | Duplicate selector '.table th', first used at line 341. |
| SQC-040 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 577 | Duplicate selector '.table td', first used at line 342. |
| SQC-041 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 757 | Duplicate selector 'body', first used at line 46. |
| SQC-042 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 782 | Duplicate selector '.header', first used at line 77. |
| SQC-043 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 809 | Duplicate selector '.table th', first used at line 341. |
| SQC-044 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 813 | Duplicate selector '.role-hero', first used at line 588. |
| SQC-045 | MAINTAINABILITY | MAJOR | CODE_SMELL | css:S4666 | `apps/frontend/src/styles/global.css` | 843 | Duplicate selector '.action-btn__icon', first used at line 289. |
| SQC-046 | MAINTAINABILITY | MAJOR | CODE_SMELL | Web:S6848 | `index.html` | 96 | Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element. |
| SQC-047 | MAINTAINABILITY | MAJOR | CODE_SMELL | Web:S6848 | `index.html` | 104 | Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element. |
| SQC-048 | MAINTAINABILITY | MAJOR | CODE_SMELL | Web:S6848 | `index.html` | 111 | Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element. |
| SQC-049 | MAINTAINABILITY | MAJOR | CODE_SMELL | Web:S6848 | `index.html` | 122 | Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element. |
| SQC-050 | MAINTAINABILITY | MAJOR | CODE_SMELL | Web:S6848 | `index.html` | 129 | Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element. |
| SQC-051 | MAINTAINABILITY | MAJOR | CODE_SMELL | Web:S6848 | `index.html` | 140 | Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element. |
| SQC-052 | MAINTAINABILITY | MAJOR | CODE_SMELL | javascript:S3358 | `js/app.js` | 294 | Extract this nested ternary operation into an independent statement. |
| SQC-053 | RELIABILITY | MAJOR | CODE_SMELL | csharpsquid:S6964 | `apps/backend/CasinoDesk.Api/Contracts/ComplianceContracts.cs` | 4 | Value type property used as input in a controller action should be nullable, required or annotated with the JsonRequiredAttribute to avoid under-posting. |
| SQC-054 | RELIABILITY | MAJOR | CODE_SMELL | csharpsquid:S6964 | `apps/backend/CasinoDesk.Api/Contracts/ComplianceContracts.cs` | 4 | Value type property used as input in a controller action should be nullable, required or annotated with the JsonRequiredAttribute to avoid under-posting. |
| SQC-055 | RELIABILITY | MAJOR | CODE_SMELL | csharpsquid:S6964 | `apps/backend/CasinoDesk.Api/Contracts/ComplianceContracts.cs` | 5 | Value type property used as input in a controller action should be nullable, required or annotated with the JsonRequiredAttribute to avoid under-posting. |
| SQC-056 | RELIABILITY | MAJOR | CODE_SMELL | csharpsquid:S6964 | `apps/backend/CasinoDesk.Api/Contracts/TransactionContracts.cs` | 8 | Value type property used as input in a controller action should be nullable, required or annotated with the JsonRequiredAttribute to avoid under-posting. |
| SQC-057 | RELIABILITY | MAJOR | CODE_SMELL | csharpsquid:S6964 | `apps/backend/CasinoDesk.Api/Contracts/TransactionContracts.cs` | 9 | Value type property used as input in a controller action should be nullable, required or annotated with the JsonRequiredAttribute to avoid under-posting. |
| SQC-058 | RELIABILITY | MAJOR | CODE_SMELL | csharpsquid:S6964 | `apps/backend/CasinoDesk.Api/Contracts/TransactionContracts.cs` | 26 | Value type property used as input in a controller action should be nullable, required or annotated with the JsonRequiredAttribute to avoid under-posting. |
| SQC-059 | RELIABILITY | MAJOR | CODE_SMELL | csharpsquid:S6966 | `apps/backend/CasinoDesk.Api/Program.cs` | 80 | Await RunAsync instead. |
| SQC-060 | RELIABILITY | MAJOR | BUG | typescript:S6440 | `apps/frontend/src/components/AppShell.tsx` | 311 | React Hook 'useOutletContext' is called conditionally. React Hooks must be called in the exact same order in every component render. |
| SQC-061 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 161 | A form label must be associated with a control. |
| SQC-062 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 165 | A form label must be associated with a control. |
| SQC-063 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 178 | A form label must be associated with a control. |
| SQC-064 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 205 | A form label must be associated with a control. |
| SQC-065 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 209 | A form label must be associated with a control. |
| SQC-066 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 216 | A form label must be associated with a control. |
| SQC-067 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 220 | A form label must be associated with a control. |
| SQC-068 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 227 | A form label must be associated with a control. |
| SQC-069 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 241 | A form label must be associated with a control. |
| SQC-070 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 363 | A form label must be associated with a control. |
| SQC-071 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 397 | A form label must be associated with a control. |
| SQC-072 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 401 | A form label must be associated with a control. |
| SQC-073 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 415 | A form label must be associated with a control. |
| SQC-074 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 419 | A form label must be associated with a control. |
| SQC-075 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 426 | A form label must be associated with a control. |
| SQC-076 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 430 | A form label must be associated with a control. |
| SQC-077 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 487 | A form label must be associated with a control. |
| SQC-078 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 492 | A form label must be associated with a control. |
| SQC-079 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 496 | A form label must be associated with a control. |
| SQC-080 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/components/TransactionModals.tsx` | 501 | A form label must be associated with a control. |
| SQC-081 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/compliance/AlertsPage.tsx` | 122 | A form label must be associated with a control. |
| SQC-082 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/compliance/AlertsPage.tsx` | 134 | A form label must be associated with a control. |
| SQC-083 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/dashboard/ProfilePage.tsx` | 81 | A form label must be associated with a control. |
| SQC-084 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/dashboard/ProfilePage.tsx` | 101 | A form label must be associated with a control. |
| SQC-085 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 98 | A form label must be associated with a control. |
| SQC-086 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 102 | A form label must be associated with a control. |
| SQC-087 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 106 | A form label must be associated with a control. |
| SQC-088 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 110 | A form label must be associated with a control. |
| SQC-089 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 123 | A form label must be associated with a control. |
| SQC-090 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 127 | A form label must be associated with a control. |
| SQC-091 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 177 | A form label must be associated with a control. |
| SQC-092 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 181 | A form label must be associated with a control. |
| SQC-093 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 185 | A form label must be associated with a control. |
| SQC-094 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 189 | A form label must be associated with a control. |
| SQC-095 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 201 | A form label must be associated with a control. |
| SQC-096 | RELIABILITY | MAJOR | CODE_SMELL | typescript:S6853 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 205 | A form label must be associated with a control. |
| SQC-097 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 29 | A form label must be associated with a control and have accessible text. |
| SQC-098 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 33 | A form label must be associated with a control and have accessible text. |
| SQC-099 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 370 | A form label must be associated with a control and have accessible text. |
| SQC-100 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 375 | A form label must be associated with a control and have accessible text. |
| SQC-101 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 401 | A form label must be associated with a control and have accessible text. |
| SQC-102 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 446 | A form label must be associated with a control and have accessible text. |
| SQC-103 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 450 | A form label must be associated with a control and have accessible text. |
| SQC-104 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 456 | A form label must be associated with a control and have accessible text. |
| SQC-105 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 462 | A form label must be associated with a control and have accessible text. |
| SQC-106 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 466 | A form label must be associated with a control and have accessible text. |
| SQC-107 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 567 | A form label must be associated with a control and have accessible text. |
| SQC-108 | RELIABILITY | MAJOR | CODE_SMELL | Web:S6853 | `index.html` | 602 | A form label must be associated with a control and have accessible text. |
| SQC-109 | SECURITY | MAJOR | VULNERABILITY | docker:S6505 | `apps/frontend/Dockerfile` | 6 | Omitting '--ignore-scripts' can lead to the execution of shell scripts. Make sure it is safe here. |
| SQC-110 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S7764 | `apps/frontend/src/app/store.ts` | 155 | Prefer `globalThis.window` over `window`. |
| SQC-111 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S7764 | `apps/frontend/src/app/store.ts` | 160 | Prefer `globalThis` over `window`. |
| SQC-112 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S7764 | `apps/frontend/src/app/store.ts` | 176 | Prefer `globalThis.window` over `window`. |
| SQC-113 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S7764 | `apps/frontend/src/app/store.ts` | 180 | Prefer `globalThis` over `window`. |
| SQC-114 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S7764 | `apps/frontend/src/components/AppShell.tsx` | 44 | Prefer `globalThis` over `window`. |
| SQC-115 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S7764 | `apps/frontend/src/components/AppShell.tsx` | 48 | Prefer `globalThis` over `window`. |
| SQC-116 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S6759 | `apps/frontend/src/components/AppShell.tsx` | 54 | Mark the props of the component as read-only. |
| SQC-117 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S6759 | `apps/frontend/src/components/AppShell.tsx` | 63 | Mark the props of the component as read-only. |
| SQC-118 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S7778 | `apps/frontend/src/components/AppShell.tsx` | 119 | Do not call `Array#push()` multiple times. |
| SQC-119 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S6759 | `apps/frontend/src/components/RiskBadge.tsx` | 3 | Mark the props of the component as read-only. |
| SQC-120 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S6759 | `apps/frontend/src/components/TransactionModals.tsx` | 9 | Mark the props of the component as read-only. |
| SQC-121 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S6759 | `apps/frontend/src/components/TransactionModals.tsx` | 42 | Mark the props of the component as read-only. |
| SQC-122 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S6759 | `apps/frontend/src/components/TransactionModals.tsx` | 311 | Mark the props of the component as read-only. |
| SQC-123 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S6759 | `apps/frontend/src/components/TransactionModals.tsx` | 447 | Mark the props of the component as read-only. |
| SQC-124 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S6759 | `apps/frontend/src/components/TransactionModals.tsx` | 508 | Mark the props of the component as read-only. |
| SQC-125 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S1128 | `apps/frontend/src/features/compliance/AlertsPage.tsx` | 4 | Remove this unused import of 'AlertItem'. |
| SQC-126 | MAINTAINABILITY | MINOR | CODE_SMELL | typescript:S6759 | `apps/frontend/src/features/transactions/TransactionForms.tsx` | 21 | Mark the props of the component as read-only. |
| SQC-127 | MAINTAINABILITY | MINOR | CODE_SMELL | javascript:S7773 | `js/app.js` | 244 | Prefer `Number.parseInt` over `parseInt`. |
| SQC-128 | MAINTAINABILITY | MINOR | CODE_SMELL | javascript:S7773 | `js/app.js` | 252 | Prefer `Number.parseInt` over `parseInt`. |
| SQC-129 | MAINTAINABILITY | MINOR | CODE_SMELL | javascript:S7764 | `js/app.js` | 343 | Prefer `globalThis` over `window`. |
| SQC-130 | RELIABILITY | MINOR | BUG | typescript:S1082 | `apps/frontend/src/components/TransactionModals.tsx` | 27 | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| SQC-131 | RELIABILITY | MINOR | BUG | typescript:S1082 | `apps/frontend/src/components/TransactionModals.tsx` | 28 | Visible, non-interactive elements with click handlers must have at least one keyboard listener. |
| SQC-132 | RELIABILITY | MINOR | BUG | Web:MouseEventWithoutKeyboardEquivalentCheck | `index.html` | 96 | Add a keyboard event attribute to this div tag. |
| SQC-133 | RELIABILITY | MINOR | BUG | Web:MouseEventWithoutKeyboardEquivalentCheck | `index.html` | 104 | Add a keyboard event attribute to this div tag. |
| SQC-134 | RELIABILITY | MINOR | BUG | Web:MouseEventWithoutKeyboardEquivalentCheck | `index.html` | 111 | Add a keyboard event attribute to this div tag. |
| SQC-135 | RELIABILITY | MINOR | BUG | Web:MouseEventWithoutKeyboardEquivalentCheck | `index.html` | 122 | Add a keyboard event attribute to this div tag. |
| SQC-136 | RELIABILITY | MINOR | BUG | Web:MouseEventWithoutKeyboardEquivalentCheck | `index.html` | 129 | Add a keyboard event attribute to this div tag. |
| SQC-137 | RELIABILITY | MINOR | BUG | Web:MouseEventWithoutKeyboardEquivalentCheck | `index.html` | 140 | Add a keyboard event attribute to this div tag. |
| SQC-138 | SECURITY | MINOR | VULNERABILITY | Web:S5725 | `apps/frontend/index.html` | 9 | Make sure not using resource integrity feature is safe here. |
| SQC-139 | SECURITY | MINOR | VULNERABILITY | Web:S5725 | `index.html` | 9 | Make sure not using resource integrity feature is safe here. |
| SQC-140 | SECURITY | MINOR | VULNERABILITY | Web:S5725 | `pages/oficial.html` | 9 | Make sure not using resource integrity feature is safe here. |

## 11. Criterio Profesional de Actualizacion

Este archivo debe mantenerse como reporte QA principal del proyecto.

Buenas practicas recomendadas:

- Actualizar este mismo `QA_REPORT.md` cuando haya cambios menores, nuevos analisis o seguimiento de issues existentes.
- Crear un reporte separado por release, sprint o auditoria formal cuando se necesite conservar evidencia historica cerrada.
- Para entregas formales, exportar una copia a PDF con fecha y version.
- Mantener el historial de cambios mediante Git para trazabilidad.

Ejemplo recomendado:

- `QA_REPORT.md`: reporte vivo y actualizado en el repositorio.
- `docs/qa/reports/QA_REPORT_2026-05-26.pdf`: evidencia formal cerrada para una entrega especifica.
- Issues de GitHub/Jira: seguimiento operativo de cada hallazgo critico.

## 12. Historial de Revisiones

| Version | Fecha | Autor | Cambio |
| --- | --- | --- | --- |
| 1.0 | 2026-05-26 | David Ortega | Creacion inicial del reporte QA con resultados de SonarCloud. |
| 1.1 | 2026-05-27 | David Ortega | Se agrega detalle de issues por archivo/linea y estado inicial de coverage frontend. |

## 13. Conclusion

El proyecto cuenta con una base analizable en SonarQube Cloud y presenta una duplicacion baja. Sin embargo, existen riesgos relevantes en seguridad y confiabilidad que deben ser revisados por el equipo de desarrollo.

La prioridad recomendada es revisar los issues de seguridad, atender los hallazgos de confiabilidad con mayor impacto, configurar cobertura de pruebas y ejecutar un nuevo analisis para obtener el estado definitivo del Quality Gate.
