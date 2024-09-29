import React from 'react'
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';

export default function ScoreDetails({ matchData }) {
    const match = matchData;
    return (
        <Card className="my-2 shadow-sm" style={{ maxWidth: '600px', margin: 'auto' }}>
            <Card.Body >
                <p>
                    <img
                        src={match.league.logo?match.league.logo:match.country.logo}
                        alt={match.country.name}
                        style={{ width: '25px', borderRadius: '20%', border: '1px solid #007bff' }}
                    />  {match.league.name} - {match.league.season}</p>
                    <p>{match.startDate}</p>
                <Row className="align-items-center">
                    <Col xs={5} className="text-center">
                        <img
                            src={match.homeTeam.logo}
                            alt={match.homeTeam.name}
                            style={{ width: '60px', borderRadius: '50%', border: '2px solid #007bff' }}
                        />
                        <h6 className="mt-1">{match.homeTeam.name} ({match.homeTeam.abbreviation})</h6>
                        <p className="font-weight-bold" style={{ fontSize: '1.2rem', color: '#28a745' }}>
                            {match.state.teams.home.score}
                        </p>
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                            {match.state.teams.home.info || "20/20"}
                        </p>
                    </Col>
                    <Col xs={2} className="text-center">
                        <h5 className="font-weight-bold" style={{ fontSize: '1.5rem', color: '#6c757d' }}>VS</h5>
                        <Badge pill variant="info" className="mt-2" style={{ fontSize: '0.8rem' }}>
                            {match.status}
                        </Badge>
                    </Col>
                    <Col xs={5} className="text-center">
                        <img
                            src={match.awayTeam.logo}
                            alt={match.awayTeam.name}
                            style={{ width: '60px', borderRadius: '50%', border: '2px solid #007bff' }}
                        />
                        <h6 className="mt-1">{match.awayTeam.name} ({match.awayTeam.abbreviation})</h6>
                        <p className="font-weight-bold" style={{ fontSize: '1.2rem', color: '#dc3545' }}>
                            {match.state.teams.away.score}
                        </p>
                        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                            {match.state.teams.away.info || "20/20"}
                        </p>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-center">
                        <h6>Result:</h6>
                        <p className="font-weight-bold" style={{ fontSize: '1rem' }}>{match.state.report}</p>
                        <Button variant="primary" onClick={match.onViewDetails} size="sm">
                            View Match Details
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
