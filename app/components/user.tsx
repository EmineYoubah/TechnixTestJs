"use client"
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";


// Créez un composant React qui affiche une liste
// d'éléments récupérés depuis un point d'API


// reponce :
function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/actifusers/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setUsers(jsonRes));
  }, []); // Add an empty dependency array to useEffect to ensure it only runs once

  return (
    <div>
      <h2>Liste des utilisateurs actifs :</h2>
      <ul>
        {users.map((user) => (
          <li >{`${user.name} ${user.lastname} - ${user.statut}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
